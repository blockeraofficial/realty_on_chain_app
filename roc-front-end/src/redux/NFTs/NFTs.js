import { createAsyncThunk } from "@reduxjs/toolkit";

// ACTIONS
const GET_NFTS = "nft-marketplace/NFTs/GET_NFTS";
const FILTER_NFTS = "nft-marketplace/NFTs/FILTER_NFTS";

export const LoadNFTs = createAsyncThunk(GET_NFTS, async (params) => {
  const alchemy_sepolia_api_key = process.env.REACT_APP_ALCHEMY_API_KEY;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const baseURL = `https://eth-sepolia.g.alchemy.com/nft/v3/${alchemy_sepolia_api_key}/getNFTsForContract?contractAddress=${params.contractAddress}&withMetadata=${params.withMetadata}&startToken=${params.startToken}&limit=${params.limit}`;

  let nfts = await fetch(baseURL, options)
    .then((response) => response.json())
    .then((response) => response.nfts);

  const statusArray = [];

  for (let i = 0; i < nfts.length; i++) {
    statusArray.push("open");
  }

  nfts = nfts.map((nft) => {
    return Object.assign(nft, { status: "open" });
  });

  return nfts;
});

let nfts;

export function nftsReducer(state = { nfts: [] }, action = {}) {
  switch (action.type) {
    case `${GET_NFTS}/fulfilled`:
      nfts = action.payload;

      // Assign status, that will be changed later

      console.log("action", action);

      return {
        ...state,
        nfts: nfts,
      };
    case FILTER_NFTS:
      const condition = (property) =>
        "open" === property.status
          ? property
          : "sold" === property.status
          ? property
          : "cancelled" === property.status
          ? property
          : null;

      const teta = nfts.filter(condition);

      console.log("WOW", teta);

      return {
        ...state,
        nfts: nfts,
      };
    default:
      return state;
  }
}

export const filterNFTs = (payload) => ({
  type: FILTER_NFTS,
  id: payload,
});
