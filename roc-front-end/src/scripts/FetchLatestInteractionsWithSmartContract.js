import { Alchemy, Network } from "alchemy-sdk";
import dotenv from "dotenv";
dotenv.config();

const contractAddress = process.env.SEPOLIA_CONTRACT_ADDRESS;

const averageBlockTimeSepoliaInSeconds = 12;

const config = {
  apiKey: "6Kz--SsEz_KpP4tcm5eQhWv-R643Cplb",
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

async function latestBlockNumber() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("LATEST BLOCK NUMBER IS:", latestBlock);
  return latestBlock;
}

const allTransactionData = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0x6dfea90EEf51c11372BEc0Faa3C5cc8630004848",
  category: ["external", "internal", "erc20", "erc721", "erc1155"],
});

const filteredTransactions = allTransactionData.transfers.filter(
  (transaction) => {
    return (transaction.from =
      contractAddress || transaction.to === contractAddress);
  }
);

const currentBlockNum = await latestBlockNumber();

for (const transaction of filteredTransactions) {
  let decimalValue = parseInt(transaction.blockNum, 16);
  const transactionAge =
    ((currentBlockNum - decimalValue) * averageBlockTimeSepoliaInSeconds) /
    86400;
  transaction.Age = transactionAge;
}

console.log(filteredTransactions);
