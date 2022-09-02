import hre, { ethers } from "hardhat";

export async function deployWallet() {
  const Wallet = await ethers.getContractFactory("Wallet");
  const wallet = await Wallet.deploy("0x4d5332898570c60a7eD6c8A15f8BFAa605BAb95b");
  console.log(`wallet deployed to:`, wallet.address);
}

deployWallet()