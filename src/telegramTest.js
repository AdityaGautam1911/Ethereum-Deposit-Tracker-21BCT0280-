// testTelegram.js
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const sendTestMessage = async () => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: "Test message from deposit tracker",
      }
    );
    console.log("Telegram response:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

sendTestMessage();
