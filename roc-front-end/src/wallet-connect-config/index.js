import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const PROJECT_ID = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "SEPL",
  explorerUrl: "https://sepolia-explorer.example.com",
  rpcUrl: process.env.REACT_APP_SEPOLIA_RPC_URL,
};

const metadata = {
  name: "Okane",
  description: "Okane website description will go here",
  url: "https://www.okane.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepolia],
  projectId: PROJECT_ID,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // metamask-wallet-address
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // coinbase-wallet-address
    "1f711d32b1df0f84741fafa2ad1d81599b01297cc7d22d153272cb3ef4232f19", // sequence-wallet-address
  ],
  includeWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // metamask-wallet-address
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // coinbase-wallet-address
    "1f711d32b1df0f84741fafa2ad1d81599b01297cc7d22d153272cb3ef4232f19", // sequence-wallet-address
  ],
  themeVariables: {
    "--w3m-color-mix": "#290E41",
    "--w3m-accent": "#ffffff",
    "--w3m-font-size-master": "10px",
  },
  termsConditionsUrl: "https://www.mytermsandconditions.com",
  privacyPolicyUrl: "https://www.myprivacypolicy.com",
});
