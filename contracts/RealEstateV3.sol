//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IERC20 {
    function transfer(address _to, uint256 _value) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function balanceOf(address account) external view returns (uint256);

    function decimals() external view returns (uint8);
}

interface IUSDT {
    function transfer(address, uint256) external;

    function transferFrom(address, address, uint) external;

    // function balanceOf(address account) external view returns (uint256); (Add this one later)

    function decimals() external view returns (uint8);
}

error Token__Inexistent();
error Not__AvailableTokenLeft();
error Not__Transferred();

contract RealEstateV3 is Ownable, ReentrancyGuard, ERC1155URIStorage {
    using SafeMath for uint256;
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _listingIds;

    // Change this on deployment.
    address public constant TETHER_ADDRESS =
        0x15d7b8FFF52c255b174c1725b9DB6Ed3D9558F5b;

    IUSDT public tether = IUSDT(TETHER_ADDRESS); // Test Tether Currently
    uint256 decimal = tether.decimals();


    string public name;
    string public symbol;
    // uint256 public currentPropertySupply;
    uint256 public constant INITIAL_PROPERTY_PRICE = 10;

    // Secondary Market Parameters
    uint256 public listingCounter;
    uint8 public constant STATUS_OPEN = 1;
    uint8 public constant STATUS_CLOSED = 2;

    struct Listing {
        address seller;
        uint256 tokenId;
        uint256 price; // display price
        uint256 sellAmount;
        uint256 startAt;
        uint8 status;
    }

    mapping(uint256 => Listing) public listings;

    // Put an enum with cancelled, open, sold;

    struct Property {
        string name;
        uint256 totalTokens;
        uint256 tokensSold;
        string country;
        // string addressInfo;
        // string area;
        // Put an enum with cancelled, open, sold;
    }

    // Property[] public propertyList;
    mapping(uint256 => Property) public tokenIdToProperty;
    mapping(uint256 => bool) public checkTokenSupplyStatus;
    mapping(uint256 => uint) public totalTokenSupplyForAGivenProperty;
    mapping(uint256 => string) public tokenIdToImageLink;

    constructor() ERC1155("") {
        name = "Wakaru";
        symbol = "WK";
    }

    modifier checkTokenId(uint256 _tokenId) {
        if (!checkTokenSupplyStatus[_tokenId]) revert Token__Inexistent();
        _;
    }

    function getTokenURI(
        uint256 _tokenId
    ) public view checkTokenId(_tokenId) returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name": "',
            getPropertyName(_tokenId),
            '",',
            '"description": "',
            "Fractionalised Real Estate Property by Wakaru LTD",
            '",',
            '"totalTokens": "',
            getTotalTokens(_tokenId).toString(),
            '",',
            '"tokensSold": "',
            getTokensSold(_tokenId).toString(),
            '",',
            '"country": "',
            getCountry(_tokenId),
            '",',
            '"image": "',
            tokenIdToImageLink[_tokenId],
            '"'
            "}"
        );
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    function getTotalTokens(
        uint256 _tokenId
    ) public view checkTokenId(_tokenId) returns (uint256) {
        // To be converted to string on the frontend.
        return tokenIdToProperty[_tokenId].totalTokens;
    }

    function getTokensSold(
        uint256 _tokenId
    ) public view checkTokenId(_tokenId) returns (uint256) {
        // To be converted to string on the frontend.
        return tokenIdToProperty[_tokenId].tokensSold;
    }

    function getCountry(
        uint256 _tokenId
    ) public view checkTokenId(_tokenId) returns (string memory) {
        return tokenIdToProperty[_tokenId].country;
    }

    function getPropertyName(
        uint256 _tokenId
    ) public view checkTokenId(_tokenId) returns (string memory) {
        string memory propertyName = tokenIdToProperty[_tokenId].name;
        return propertyName;
    }

    function addAPropertyToSell(
        string memory _name,
        uint256 _totalTokens,
        string memory country,
        string memory image_link
    ) public onlyOwner {
        _tokenIds.increment();

        uint256 currentTokenId = _tokenIds.current();
        checkTokenSupplyStatus[currentTokenId] = true;

        Property memory currentProperty = Property(
            _name,
            _totalTokens,
            0,
            country
        );
        tokenIdToProperty[currentTokenId] = currentProperty;

        tokenIdToImageLink[currentTokenId] = image_link;
        _setURI(currentTokenId, getTokenURI(currentTokenId));
    }

    function updatePropertyStatus(
        uint256 _tokenId,
        bool _newStatus
    ) public checkTokenId(_tokenId) onlyOwner {
        if (!checkTokenSupplyStatus[_tokenId])
            revert("Wakaru: TOKEN_INEXISTENT");
        checkTokenSupplyStatus[_tokenId] = _newStatus;
    }

    function mint(uint256 _amount, uint256 _propertyId) public {
        require(
            checkTokenSupplyStatus[_propertyId],
            "The property you would like to buy is not available in this time!"
        );

        Property storage currentProperty = tokenIdToProperty[_propertyId];

        require(
            currentProperty.totalTokens >=
                (currentProperty.tokensSold.add(_amount)),
            "There are no available tokens left for selected amount!"
        );

        currentProperty.tokensSold += _amount;

        // Updating metadata process
        _setURI(_propertyId, getTokenURI(_propertyId));

        tether.transferFrom(
            msg.sender,
            address(this),
            _amount.mul(INITIAL_PROPERTY_PRICE).mul(10 ** decimal)
        );

        _mint(msg.sender, _propertyId, _amount, "");
    }

    function withdrawNativeToken() public onlyOwner {
        uint256 balance = address(this).balance;
        (bool sent, ) = payable(msg.sender).call{value: balance}("");
        if (!sent) revert Not__Transferred();
    }

    // Function to withdraw ERC20 tokens to the owner's account
    function withdrawERC20(
        uint256 amount,
        address _tokenAddress
    ) external onlyOwner {
        require(amount != 0, "Withdrawal amount must be greater than zero");

        IERC20 token = IERC20(_tokenAddress);

        bool sent = token.transfer(owner(), amount);
        if (!sent) revert Not__Transferred();
    }

    function withdrawUSDT(uint256 amount) external onlyOwner {
        require(amount != 0, "Withdrawal amount must be greater than zero");

        // Transfer tokens from the contract to the owner, it does not returns bool
        tether.transfer(owner(), amount);
    }

    function getAllPropertyPrice() public view returns (uint[] memory) {
        uint256 currentTokenId = _tokenIds.current();
        uint[] memory result = new uint[](currentTokenId);
        for (uint i = 0; i < currentTokenId; i++)
            result[i] = tokenIdToProperty[i].totalTokens;
        return result;
    }

    function getAllPropertySoldAmount() public view returns (uint[] memory) {
        uint256 currentTokenId = _tokenIds.current();
        uint[] memory result = new uint[](currentTokenId);
        for (uint i = 0; i < currentTokenId; i++)
            result[i] = tokenIdToProperty[i].tokensSold;
        return result;
    }

    // Secondary Market Functions
    function createSecondaryMarketListing(
        uint256 price,
        uint256 tokenId,
        uint256 sellAmount
    ) public {
        require(getERC1155TokenBalance(tokenId) >= sellAmount);

        _listingIds.increment();
        uint256 listingId = _listingIds.current();
        uint256 startAt = block.timestamp;

        listings[listingId] = Listing({
            seller: msg.sender,
            tokenId: tokenId,
            price: price,
            sellAmount: sellAmount,
            status: STATUS_OPEN,
            startAt: startAt
        });
    }

    function buySecondaryMarketToken(
        uint256 listingId,
        uint256 tokenAmount
    ) public nonReentrant {
        require(isSellingOpen(listingId), "auction is still open");
        // require(tether.balanceOf(msg.sender) >= tokenAmount * payment); Add this one later

        Listing storage listing = listings[listingId];
        uint256 payment = tokenAmount.mul(INITIAL_PROPERTY_PRICE).mul(
            10 ** decimal
        );

        require(tokenAmount <= listing.sellAmount);
        require(payment == tokenAmount * listing.price);

        listing.sellAmount -= tokenAmount;

        if (listing.sellAmount == 0) {
            listing.status = STATUS_CLOSED;
        }

        tether.transferFrom(msg.sender, listing.seller, payment); // approve function must be initialized for that operation
        transferERC1155Tokens(
            listing.seller,
            msg.sender,
            listing.tokenId,
            tokenAmount
        ); // setApprovalForAll must be initialized for that operation
    }

    function isSellingOpen(uint256 id) public view returns (bool) {
        return listings[id].status == STATUS_OPEN;
    }

    function closeSelling(uint256 listingId) public {
        Listing storage listing = listings[listingId];
        require(msg.sender == listing.seller);
        listing.status = STATUS_CLOSED;
    }

    function getERC1155TokenBalance(
        uint256 _tokenId
    ) public view returns (uint256) {
        ERC1155 token = ERC1155(address(this));
        return token.balanceOf(msg.sender, _tokenId);
    }

    function transferERC1155Tokens(
        address _seller,
        address _buyer,
        uint256 _tokenId,
        uint256 _amount
    ) internal {
        ERC1155 token = ERC1155(address(this));
        token.safeTransferFrom(_seller, _buyer, _tokenId, _amount, "");
    }
}
