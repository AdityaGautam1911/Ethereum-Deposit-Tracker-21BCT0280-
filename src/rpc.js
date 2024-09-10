const { Alchemy, Network } = require("alchemy-sdk");
require("dotenv").config();

const settings = {
  apiKey: process.env.RPC_URL, // Alchemy API key from .env file
  network: Network.ETH_MAINNET, // Ethereum Mainnet
};

const alchemy = new Alchemy(settings);

//asynchronous function that fetches the latest block number
const getBlockNumber = async () => {
  try {
    const blockNumber = await alchemy.core.getBlockNumber();
    return blockNumber;
  } catch (error) {
    console.error("Error fetching block number:", error);
    throw error;
  }
};

//asynchronous function that retrieves a specific block by its number, along with its transactions
const getBlock = async (blockNumber) => {
  try {
    const block = await alchemy.core.getBlockWithTransactions(blockNumber);
    return block;
  } catch (error) {
    console.error("Error fetching block:", error);
    throw error;
  }
};

//retrieves the receipt of a specific transaction by its hash (ransaction status, gas used, and logs)
const getTransactionReceipt = async (transactionHash) => {
  try {
    const receipt = await alchemy.core.getTransactionReceipt(transactionHash);
    return receipt;
  } catch (error) {
    console.error("Error fetching transaction receipt:", error);
    throw error;
  }
};

module.exports = { getBlockNumber, getBlock, getTransactionReceipt };
