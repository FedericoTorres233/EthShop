// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

contract Ethshop{
    address payable public Owner;

    constructor(){
        Owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == Owner, 'Not owner'); 
        _;
    }


    function withdrawFunds(uint256 _amount) payable public onlyOwner {
        Owner.transfer(_amount);
    }
}