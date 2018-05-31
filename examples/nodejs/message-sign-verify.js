// import bitcoin utility belt
var belt = require("bitcoin-utility-belt");

// your message
var message = "Bitcoin Utility Belt RULES!";
console.log(message);

// create a random wallet (only works with legacy addresses)
var wallet = belt.wallet.create("legacy");
console.log(wallet);

// sign message with private key
var signature = belt.message.sign(message, wallet.privateKey);
console.log(signature);

// verify message with signature, message and address
var verifyMessage = belt.message.verify(message, wallet.address, signature);
console.log(verifyMessage);