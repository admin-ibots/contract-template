// scripts/deploy_hello_world.js

// Hardhat 2.x/Ethers v5 reliably injects 'ethers' globally
async function main() {
  console.log("Starting deployment...");

  // Use the Ethers v5 syntax: getContractFactory(ContractName)
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  
  // Deploy the contract
  const helloWorld = await HelloWorld.deploy();

  // Wait for the deployment transaction to be mined
  await helloWorld.deployed(); // Ethers v5 uses .deployed()

  // Log the address where the contract was deployed
  console.log(`\n✅ HelloWorld deployed to: ${helloWorld.address}\n`);
  
  // Optional: Call the getMessage function to verify
  const message = await helloWorld.getMessage();
  console.log(`📖 Initial message: "${message}"`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
