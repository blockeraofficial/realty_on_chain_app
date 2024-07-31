//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OkaneToken is ERC20 {
    address public owner;

    uint constant _initial_supply = 1000000 * (10 ** 18);

    constructor() ERC20("Okane", "OKR") {
        owner = msg.sender;
        _mint(msg.sender, _initial_supply);
    }

    function burn(uint256 value) public {
        _burn(msg.sender, value);
    }
}
