import { ethers } from "hardhat";
import addressUtils from "../utils/addresses";
import hre from "hardhat";

async function main() {
  const CINT = await ethers.getContractFactory("INToken");
  const INT = await CINT.deploy();
    console.log("test");
  await INT.deployed();
    console.log("test");
  console.log("INT token is deployed to :", INT.address);
  // await addressUtils.saveAddresses(hre.network.name, { INT: INT.address });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

