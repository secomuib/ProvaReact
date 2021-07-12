pragma solidity ^0.5.7;
contract Transfer_Asset_Ownership {

address public owner;
address public contractAddress; 
bytes public sha256hash; 

constructor() public payable {
    owner = msg.sender;
    contractAddress = address(this);
}

function changeOwner(address payable _owner) public {
    require(msg.sender == owner);
    owner = _owner;
}

function setsha256hash(bytes memory _sha256hash) public {
    sha256hash = _sha256hash;
}
}