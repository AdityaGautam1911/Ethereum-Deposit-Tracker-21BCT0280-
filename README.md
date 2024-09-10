# ETHEREUM DEPOSIT TRACKER

## HOW TO TEST THIS PROJECT

1. **Clone Repo**

    ```bash
    git clone https://github.com/AdityaGautam1911/Ethereum-Deposit-Tracker-21BCT0280-.git
    cd Ethereum-Deposit-Tracker-21BCT0280-
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Create `.env` File**

   Create a `.env` file at the same level as `tracker.js` with the following contents:

    ```env
    RPC_URL=alchemy_api_key
    TELEGRAM_API_KEY=telegram_api_key
    TELEGRAM_CHAT_ID=telegram_group_or_single_chat_id
    ```

4. **Configure Beacon Contract Address**

   Enter any Beacon contract address you need to monitor in `config/config.json`:

    ```json
    {
      "beaconContractAddress": "any_beacon_contract_address_to_monitor",
      "checkInterval": 15000
    }
    ```

5. **Run the Tracker Application**

    ```bash
    node src/tracker.js
    ```

## HOW TO TEST THIS PROJECT

**Getting transaction details notification on Telegram**

![image](https://github.com/user-attachments/assets/861294d7-6f29-4acb-97a3-0fee94ffd8d7)
