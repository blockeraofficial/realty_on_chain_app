import dotenv from "dotenv";
dotenv.config();

const fetchNFTsByCollection = (
  network,
  contractAddress,
  withMetadata,
  startToken,
  limit
) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

  fetch(
    `https://eth-${network}.g.alchemy.com/nft/v3/${ALCHEMY_API_KEY}/getNFTsForContract?contractAddress=${contractAddress}&withMetadata=${withMetadata}&startToken=${startToken}&limit=${limit}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

fetchNFTsByCollection(
  "sepolia", // network
  "0xC504c46e3Bde5B0AA6f6081D32625D3cA14bf615", // collection address
  "true", // metadata info
  "0", // startId
  "100000" // endId
);
