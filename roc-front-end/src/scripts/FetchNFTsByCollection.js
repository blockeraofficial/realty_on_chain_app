import dotenv from "dotenv";
dotenv.config();

const fetchNFTsByCollection = async (
  network,
  contractAddress,
  withMetadata,
  startToken,
  limit
) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const api_key = process.env.ALCHEMY_API_KEY;

  fetch(
    `https://eth-${network}.g.alchemy.com/nft/v3/${api_key}/getNFTsForContract?contractAddress=${contractAddress}&withMetadata=${withMetadata}&startToken=${startToken}&limit=${limit}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response.nfts))
    .catch((err) => console.error(err));
};

fetchNFTsByCollection(
  "sepolia",
  "0x46e62c595DD5FF6e14105023A3b156cf555a8B92",
  true,
  0,
  100000
);
