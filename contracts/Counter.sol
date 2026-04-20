// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    int256 public counter;
    int256 public number1;
    int256 public number2;

    function increment() public {
        counter += 1;
    }

    function decrement() public {
        counter -= 1;
    }

    
}

