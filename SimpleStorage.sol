// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {
    uint256 x;

    function getter() public view returns (uint256) {
        return x;
    }

    function setter(uint256 y) public {
        x = y;
    }
}
