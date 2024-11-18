// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721_Contract is ERC721Enumerable, Ownable {
    uint256 public nextTokenId; // Keeps track of the next token ID
    string private baseTokenURI; // Base URI for metadata

    constructor(string memory name, string memory symbol, string memory baseURI) ERC721(name, symbol) Ownable(msg.sender) {
        baseTokenURI = baseURI; // Set the base URI
    }

    // Mint a new NFT
    function mint(address to) external onlyOwner {
        uint256 tokenId = nextTokenId; // Get the next token ID
        _safeMint(to, tokenId); // Mint the token
        nextTokenId++; // Increment for the next mint
    }

    // Override the base URI function
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    // Set the base URI
    function setBaseURI(string memory baseURI) external onlyOwner {
        baseTokenURI = baseURI;
    }
}
