// Fetch NFT data for a particular wallet that has NFTs related to that contract address

import dotenv from "dotenv";
dotenv.config();

const fetchNFTsByCollectionAndPerson = async (network, wallet, collection) => {
  let nfts;
  const api_key = process.env.ALCHEMY_API_KEY;
  const baseURL = `https://eth-${network}.g.alchemy.com/v2/${api_key}/getNFTs/`;
  var requestOptions = {
    method: "GET",
  };

  console.log("fetching nfts for collection owned by address");
  const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
  nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());

  console.log(nfts);
};

await fetchNFTsByCollectionAndPerson(
  "sepolia",
  "0xff7791F005dE78008Bc8990c9f889725027629F4", // Address of the person
  "0xF8c68ebBD71cEdeC9735A41a3703057cf30F2985" // Address of the collection
);
