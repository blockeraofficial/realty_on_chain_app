// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract Staking is Ownable {
    event StakedToken(address indexed _owner, uint256 _stakeId, uint256 _date);
    event ClaimedToken(address indexed _owner, uint256 _stakeId, uint256 _date);

    struct stakeInfo {
        uint256 amount; // staked amount
        uint256 rate; // interest rate
        uint256 total_payout; // total amount to redeem (principal + interest)
        uint256 date_added;
        uint256 redeem_date;
        uint256 locked_date;
        bool is_reedemed;
    }

    uint256 private constant OKR_COIN_PRECISION = (10 ** 18); // Token has 18 decimals
    IERC20 public immutable OkaneToken;

    uint256 public StakeId; // global auto-incremental record ID
    uint256 public totalValueLocked; // To get the total value locked
    uint256 public totalOkrGenerated; // To get total OKR generated
    mapping(address => uint256[]) walletStakedIds; // store all Staked IDs per wallet address
    mapping(uint256 => stakeInfo) idStakeInfo; // to get the stake details using ID
    mapping(uint256 => uint256) idToOwnerIndex; // to track down the index position of Stake ID in array table
    mapping(uint256 => address) IdToWallet; // to retrieve the owner or wallet address using stake ID
    mapping(uint256 => uint256) interestRates; // to create a key-pair values of (days & interest rates)

    // uint256 private xSaltKey;

    uint256 public minStakeAmount;
    uint256 public totalReedemed;
    bool public stakingIsOpen;

    mapping(address => bool) activeAccounts;
    mapping(address => uint256) public userTotalStaked;
    mapping(address => uint256) public userTotalReedemed;

    constructor(address _okaneTokenAddress) {
        OkaneToken = IERC20(_okaneTokenAddress);
        stakingIsOpen = true;
        minStakeAmount = 10 * OKR_COIN_PRECISION; // 10 tokens - minimum amount to stake

        // array data for interest rates
        interestRates[31557600] = 15; // 365 days = %15
        interestRates[15552000] = 6; // 180 days = %6
        interestRates[7776000] = 4; // 90 days = %4
        interestRates[2592000] = 1; // 30 days = %1
    }

    function Stake(
        uint256 _depositAmount,
        uint256 _stakeTime
    ) public returns (bool) {
        require(stakingIsOpen, "staking is closed");
        require(_depositAmount >= minStakeAmount, "invalid token amount");
        require(
            getTokenBalance(msg.sender) >= _depositAmount,
            "not enough token balance"
        );
        uint256 _intRate = interestRates[_stakeTime]; // check if user has enough balance
        require(_intRate > 0, "invalid time value");

        uint256 _profit = (_depositAmount * _intRate) / 100;
        uint256 _payout = _depositAmount + _profit;
        require(getTotalOkrInContract() >= _payout, "not enough reward pool"); // check if the reward pool has enough balance to cover the payout amount

        StakeId += 1;
        totalValueLocked += _depositAmount;
        totalOkrGenerated += _profit;

        stakeInfo storage _stake = idStakeInfo[StakeId];
        _stake.amount = _depositAmount;
        _stake.date_added = block.timestamp;
        _stake.redeem_date = block.timestamp + _stakeTime;
        _stake.locked_date = _stakeTime;
        _stake.rate = _intRate;
        _stake.total_payout = _payout;

        // Update user (address) total staked amount
        userTotalStaked[msg.sender] += _depositAmount;

        IdToWallet[StakeId] = msg.sender;
        walletStakedIds[msg.sender].push(StakeId);
        idToOwnerIndex[StakeId] = walletStakedIds[msg.sender].length - 1;

        // Execute a transfer on the token contract
        OkaneToken.transferFrom(msg.sender, address(this), _depositAmount);

        emit StakedToken(msg.sender, StakeId, block.timestamp);

        return true;
    }

    function ClaimStake(uint256 _id) public returns (bool) {
        address _stakeOwner = IdToWallet[_id];
        require(_stakeOwner == msg.sender, "invalid owner");

        stakeInfo storage _stake = idStakeInfo[_id];
        require(_stake.is_reedemed == false, "already reedemed");

        uint256 _payoutDate = _stake.redeem_date;
        require(block.timestamp > _payoutDate, "not yet ready to redeem");

        _stake.is_reedemed = true;

        userTotalReedemed[msg.sender] += _stake.total_payout;
        totalReedemed += _stake.total_payout;

        OkaneToken.transfer(msg.sender, _stake.total_payout);

        emit ClaimedToken(msg.sender, _id, block.timestamp);
        return true;
    }

    function getTokenBalance(address _address) public view returns (uint256) {
        return OkaneToken.balanceOf(_address);
    }

    function setInterestRates(uint256 _days, uint256 _rates) public onlyOwner {
        interestRates[_days] = _rates;
    }

    function getOwnerStakeIds(
        address _owner
    ) public view returns (uint256[] memory) {
        return walletStakedIds[_owner];
    }

    function getStakeDetails(
        uint256 _stakeId
    )
        public
        view
        returns (
            uint256 amount,
            uint256 rate,
            uint256 total_payout,
            uint256 date_added,
            uint256 reedem_date,
            uint256 locked_date,
            bool is_reedemed
        )
    {
        stakeInfo storage _stake = idStakeInfo[_stakeId];
        return (
            _stake.amount,
            _stake.rate,
            _stake.total_payout,
            _stake.date_added,
            _stake.redeem_date,
            _stake.locked_date,
            _stake.is_reedemed
        );
    }

    function isReedemed(uint256 _stakeId) public view returns (bool) {
        stakeInfo storage _stake = idStakeInfo[_stakeId];
        return _stake.is_reedemed;
    }

    function chageStakingStatus() public onlyOwner {
        if (stakingIsOpen) {
            stakingIsOpen = false;
        } else {
            stakingIsOpen = true;
        }
    }

    function getTotalOkrInContract() public view returns (uint) {
        return OkaneToken.balanceOf(address(this));
    }

    function returnDashboardStatistics()
        public
        view
        returns (uint, uint, uint, uint)
    {
        return (
            getTotalOkrInContract(),
            StakeId,
            totalValueLocked,
            totalOkrGenerated
        );
    }
}
