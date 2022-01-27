require("dotenv").config();
const Web3 = require("web3");

const web3 = new Web3("http://localhost:8545");

const privateKey = process.env.PrivateKey;

const myAccount = web3.eth.accounts.wallet.add(privateKey);

module.exports = {
  web3,
  myAccount,
};
