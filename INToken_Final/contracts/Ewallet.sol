//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./INToken.sol";

contract eWallet {
    INToken voteContract;

    constructor(address _addr) {
        voteContract = INToken(_addr);
    }

    function donate (uint256 amount) public{
        voteContract.transferFrom(msg.sender, address(this), amount);
    }
}