const { getBlockNumber, getBlock, getTransactionReceipt } = require("./rpc");
const winston = require("winston"); //handle logging of errors (errors.log)
const config = require("../config/config.json");
const alert = require("./alerts");

// Setup Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "logs/errors.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

async function monitorDeposits() {
  let latestBlock = await getBlockNumber();

  setInterval(async () => {
    try {
      // Fetch the latest block and its transactions
      const block = await getBlock(latestBlock);

      for (let tx of block.transactions) {
        // Check if the transaction is for the Beacon Deposit Contract
        if (
          tx.to &&
          tx.to.toLowerCase() === config.beaconContractAddress.toLowerCase()
        ) {
          const receipt = await getTransactionReceipt(tx.hash);

          for (let log of receipt.logs) {
            // Log and alert deposit event
            const deposit = {
              blockNumber: block.number,
              blockTimestamp: block.timestamp,
              hash: tx.hash,
              pubkey: log.topics[1],
            };
            console.log("New Deposit:", deposit);
            logger.info("Deposit recorded:", deposit);

            await alert.notifyTelegram(deposit);
          }
        }
      }

      latestBlock++; // Increment block number to check the next block in the next interval
    } catch (error) {
      logger.error("Error tracking deposits:", error);
    }
  }, config.checkInterval);
}

monitorDeposits();
