# ETHEREUM DEPOSIT TRACKER
## HOW TO TEST THIS PROJECT

.> clone repo
--> git clone https://github.com/AdityaGautam1911/Ethereum-Deposit-Tracker-21BCT0280-.git
--> cd Ethereum-Deposit-Tracker-21BCT0280-

.> install dependencies
--> npm install (at the root of the folder)

.>create .env file at the same file level with tracker.js with the following contents
RPC_URL=alchemy_api_key
TELEGRAM_API_KEY=telegram_api_key
TELEGRAM_CHAT_ID=telegram_group_or_single_chat_id

.>enter any beacon contract address you need to monitor in config/config.json
{
  "beaconContractAddress": "any_beacon_contract_address_to_monitor",
  "checkInterval": 15000
}

.>run the tracker application
--> node src/tracker.js (at the root of the folder)

## HOW TO TEST THIS PROJECT
--> Getting transaction details notification on telegram
![image](https://github.com/user-attachments/assets/861294d7-6f29-4acb-97a3-0fee94ffd8d7)
