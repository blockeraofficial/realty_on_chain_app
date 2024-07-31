import { Alchemy, Network } from "alchemy-sdk";
import dotenv from "dotenv";
dotenv.config();

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Contract address
  const address = "0x46e62c595DD5FF6e14105023A3b156cf555a8B92";

  // Get owners
  const owners = await alchemy.nft.getOwnersForContract(address);
  console.log(owners);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
