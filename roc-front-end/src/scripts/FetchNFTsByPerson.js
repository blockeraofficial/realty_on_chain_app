// Fetch Owned NFTs for the particular wallet

import dotenv from "dotenv";
dotenv.config();

const fetchNFTs = async (wallet) => {
  let nfts;
  const api_key = process.env.ALCHEMY_API_KEY;
  const baseURL = `https://eth-sepolia.g.alchemy.com/v2/${api_key}/getNFTs/`;
  var requestOptions = {
    method: "GET",
  };

  const fetchURL = `${baseURL}?owner=${wallet}`;

  nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());

  return nfts;
};

const wallet = "0xff7791F005dE78008Bc8990c9f889725027629F4"; // my-address

const nfts = await fetchNFTs(wallet);

// console.log(`Nfts Owned by the Address ${wallet} :`, nfts.ownedNfts); // This is an array of objects

const myNftArrayTitle = [];
const myNftArrayImage = [];

console.log(nfts);

for (let i = 0; i < nfts.ownedNfts.length; i++) {
  myNftArrayTitle.push(nfts.ownedNfts[i].metadata.name);
  myNftArrayImage.push(nfts.ownedNfts[i]);

  if (nfts.ownedNfts[i].metadata.name === undefined) {
    console.log("TokenId:", parseInt(nfts.ownedNfts[i].id.tokenId, 16));
  } else {
    console.log("Name:", nfts.ownedNfts[i].metadata.name);
  }

  console.log(`Nft No ${i + 1}:`);
  console.log("Contract Address:", nfts.ownedNfts[i].contract.address);
  console.log("Image: ", nfts.ownedNfts[i].metadata.image);
  console.log("Token Type: ", nfts.ownedNfts[i].contractMetadata.tokenType);
  console.log("----------------------------------------------");

  //console.log(nfts.ownedNfts[i]);
  //console.log("-------------------");
}

//console.log(nfts);
