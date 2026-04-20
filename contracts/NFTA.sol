pragma solidity ^0.8.28;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage {
    uint256 tokenId;

    constructor() ERC721("Sherwaskjdakjsdinz", "SHER") {}

    function mint() external {
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "https://ivory-additional-snail-831.mypinata.cloud/ipfs/bafkreibc7d3vnc24vsg3inh6s6qh6d2xlfhd62fexxt3n5pxtuoshsk7be"
        );
        tokenId++;
    }
}