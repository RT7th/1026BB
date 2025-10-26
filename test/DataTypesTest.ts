import { describe, it } from "node:test";
import { network } from "hardhat";

describe("TwoUintsDemo", async function () {
  const { viem } = await network.connect();

  it("Should log two uint values", async function () {
    // Deploy the demo contract
    const demo = await viem.deployContract("DataTypes");

    // Read two uints
    const u = await demo.read.tristan();
    const i = await demo.read.jp();

    console.log("\n--- Two Uint Values ---");
    console.log("uint256 u:", u.toString());
    console.log("int256 i:", i.toString());
  });
});
