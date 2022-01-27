const Web3 = require("web3");

const web3 = new Web3("http://localhost:8545");

const privateKey =
  "0xd3a5bcb2d306cbc5b78836df6c529b96a7a1be269d585b25ed67c01727e3de48";
const myAccount = web3.eth.accounts.wallet.add(privateKey);

module.exports = {
  web3,
  myAccount,
};
