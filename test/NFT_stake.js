const { expect } = require("chai");
const hre = require("hardhat");
const { time, loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Deploy", function () {
    
    async function deployNFTStakeFixture() {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const ERC721Contract = await ethers.getContractFactory("ERC721_Contract");


        const erc721ContractDeployed =  await ERC721Contract.deploy("MyNFT", "MNFT","ipfs://QmWWrUMWCUYTLR24KcvmRfCDR3JFzZHfTmG5PBifR2R4RF/");

        const zarDeployed = await hre.ethers.deployContract("ZAR");

        const nftStake = await hre.ethers.deployContract("NFT_stake",erc721ContractDeployed.target, zarDeployed.target);
    
        // Fixtures can return anything you consider useful for your tests
        return {nftStake, erc721ContractDeployed, zarDeployed, owner};
    }

    it("Should be able to stake" ,async function() {
        const {nftStake , erc721, zar, owner} = await loadFixture(deployNFTStakeFixture);
        
        erc721.mint(owner);

    
    });
});
