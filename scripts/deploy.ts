import { network } from "hardhat";

async function main() {  
  const { viem } = await network.connect();
  //const contract = await viem.deployContract("ISATU", [1000000n * 10n ** 18n] );
  const contract = await viem.deployContract("MyNFT");

  console.log(`boss ca mo oh: ${contract.address}`);
}

// Run the script with proper error handling
main().catch((err) => {
  console.error(err);
  process.exit(1);
});