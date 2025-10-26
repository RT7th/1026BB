// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract DataTypes2 {
  uint256 public dwight=77 ;
  uint256 public jp=99;
  mapping(string => uint256) accounts;

  uint256 balance;
  address owner;

  constructor() {
    balance=1000;
    owner=address(msg.sender);
    accounts["theblokc"]=108;

    console.log("Owner address is %s", owner);
    console.log("Owner balance is %s", balance);
    console.log("theblokc balance is %s", accounts["theblokc"]);
  }
}
