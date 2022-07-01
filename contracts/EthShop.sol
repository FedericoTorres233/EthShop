// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

contract Ethshop {
    address payable public Owner;

    constructor() {
        Owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == Owner, "Not owner");
        _;
    }

    fallback() external payable {}

    function withdrawFunds(uint256 _amount) public payable onlyOwner {
        Owner.transfer(_amount);
    }

    event Received(address, uint256);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
