import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { nftsReducer } from "./NFTs/NFTs";

const rootReducer = combineReducers({
  nfts: nftsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
