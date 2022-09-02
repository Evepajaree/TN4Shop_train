//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./MintableToken.sol";

contract INToken is MintableToken {
    constructor() MintableToken("INToken", "INT") {}
}