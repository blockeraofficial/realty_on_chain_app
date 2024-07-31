const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ deployments }) => {
  const { deploy, log } = deployments;

  const feeData = await ethers.provider.getFeeData();

  const contract = await deploy("OkaneToken", {
    from: process.env.PRIVATE_KEY,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
    maxFeePerGas: feeData.maxFeePerGas,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
  });
  log("Verifying...");
  // await block;
  await verify(contract.address);
  log("Verified!");
};

// npx hardhat deploy --network sepolia --tags OkaneToken
// npx hardhat verify 0xAf7C867f0117106B6a9F1B9f97bD49719F23cD0d --network sepolia

module.exports.tags = ["OkaneToken"];
