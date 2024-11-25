const { expect } = require("chai");
const hre = require("hardhat");
const { time, loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("NFT_stake", function () {
    
    async function deployNFTStakeFixture() {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const erc721ContractDeployed = await hre.ethers.deployContract("MyNFT", "MNFT","base_url");

        const zarDeployed = await hre.ethers.deployContract();

        const nftStake = await hre.ethers.deployContract("NFT_stake",erc721ContractDeployed, zarDeployed);
    
        // Fixtures can return anything you consider useful for your tests
        return {nftStake, erc721ContractDeployed, zarDeployed};
    }

    it("Should be able to stake" ,async function() {
        const {nftStake , erc721, zar} = await loadFixture(deployNFTStakeFixture);
        // erc721.

    });
});
