const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const ERC721Contract = await ethers.getContractFactory("ERC721_Contract");

  // Deploy the contract
  const erc721ContractDeployed = await ERC721Contract.deploy("MyNFT", "MNFT","base_url");

  // Wait for deployment to complete
  await erc721ContractDeployed.waitForDeployment();

  // Log the contract address
  console.log("ERC721 Contract deployed to:", erc721ContractDeployed.target);


  const ZAR_token = await ethers.getContractFactory("ZAR");

  const zarDeployed = await ZAR_token.deploy();

  await zarDeployed.waitForDeployment();

  console.log( "ZAR is deployed:", zarDeployed.target);

  const c1 = await ethers.getContractFactory("NFT_stake");

  const zar = await c1.deploy(erc721ContractDeployed.target, zarDeployed.target);

  await zarDeployed.waitForDeployment();

  console.log( "ZAR is deployed:", zar.target);


  // this is to deploy the NFT_stake
//    const NFT_stakes = ethers.getContractFactory("NFT_stake");

//    const NFT_stake_deploy = await NFT_stakes.deploy();

//   await NFT_stake_deploy.waitForDeployment();

//   console.log("Stake contract deployed: ",NFT_stake_deploy.getAddress());


}

// Execute the deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
