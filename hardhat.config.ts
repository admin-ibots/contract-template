// hardhat.config.js (Recommended to switch to .js for max stability)

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

// Load environment variables (from your .env file)
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";


module.exports = {
  solidity: "0.8.0", // Keep your Solidity version

  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      // Use the older format for accounts
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [], 
      chainId: 11155111,
    },
  },
};
