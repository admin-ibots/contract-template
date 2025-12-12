# Smart Contract sample on Hardhat 2 

Tested system: 
1. Ubuntu 24.04.3 LTS + NodeJS v18.20.8
2. Windows 10 + NodeJS v18.20.8
---
$ git clone https://github.com/admin-ibots/contract-template  \
$ cd contract-template
$ npm install

**Create .env (refer to dotenv_example)**  \
PRIVATE_KEY=24bc...2d85  \
SEPOLIA_RPC=https://sepolia.infura.io/v3/b4f4...33a0

$ npx hardhat run scripts/deploy_hello_world.ts --network sepolia
