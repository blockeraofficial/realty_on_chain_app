const { network } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ deployments }) => {
  const { deploy, log } = deployments;

  const feeData = await ethers.provider.getFeeData();

  const args = ["0xEDff164159B82a88d64d564af38A505bB522701e"];

  const contract = await deploy("Staking", {
    from: process.env.PRIVATE_KEY,
    log: true,
    args: args,
    waitConfirmations: network.config.blockConfirmations || 1,
    maxFeePerGas: feeData.maxFeePerGas,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
  });
  log("Verifying...");
  await verify(contract.address);
  log("Verified!");
};

// npx hardhat deploy --network sepolia --tags Staking
// npx hardhat verify --constructor-args stakingConstructorArguments.js 0x8910ADB8B7E7F74493773a64f90806583B489C27 --network sepolia

module.exports.tags = ["Staking"];
