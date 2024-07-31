// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";
import dotenv from "dotenv";
dotenv.config();

// Configures the Alchemy SDK
const config = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your API key
  network: Network.ETH_SEPOLIA, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
  // define the contract address
  const address = "0x9a10cA8bb91B9d3696A07f3AF948A750F4e5B390";

  //Call the method to return the refresh result response object
  const response = await alchemy.nft.refreshContract(address);

  //Logging the response to the console
  console.log(response);
};

main();
