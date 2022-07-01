// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

contract Ethshop{
    address payable public Owner;

    constructor(){
        Owner = payable(msg.sender);
    }
}