// const { network } = require("hardhat");
//const { Alchemy } = require("alchemy-sdk");

const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ deployments, deployer }) => {
  const { deploy, log } = deployments;

  const feeData = await ethers.provider.getFeeData();

  // console.log(feeData)

  // const gasLimit = 800000;
  // const gasPrice = ethers.utils.parseUnits("120", "gwei");
  // const baseFee = ethers.utils.parseUnits("130", "gwei");
  // const maxFeePerGas = ethers.utils.parseUnits("600", "gwei");
  // const maxPriorityFeePerGas = ethers.utils.parseUnits("5", "gwei");

  const contract = await deploy("GameItems", {
    from: process.env.PRIVATE_KEY,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
    // gasLimit,
    maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"], // Recommended maxPriorityFeePerGas
    maxFeePerGas: feeData["maxFeePerGas"], // Recommended maxFeePerGas
    // baseFee,
    // maxFeePerGas,
    // maxPriorityFeePerGas,
  });
  // log("Verifying...");
  // await block;
  // await verify(contract.address);
  // log("Verified!");
};

// npx hardhat deploy --network sepolia --tags GameItems
// npx hardhat verify 0x74aC1f1E4fe668018b10F593c08844595A00D4Df --network sepolia

module.exports.tags = ["GameItems"];
