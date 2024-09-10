const axios = require("axios");
require("dotenv").config();

async function notifyTelegram(deposit) {
  const message = `New ETH Deposit Detected:\nBlock: ${deposit.blockNumber}\nTransaction Hash: ${deposit.hash}\nTimestamp: ${deposit.blockTimestamp}`;
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    });
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

module.exports = { notifyTelegram };
