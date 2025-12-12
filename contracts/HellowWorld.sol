// contracts/HelloWorld.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private message;

    // The constructor sets the initial state
    constructor() {
        message = "Hello World!";
    }

    // Read-only function
    function getMessage() public view returns (string memory) {
        return message;
    }

    // NEW: Transactional function to change the state
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
