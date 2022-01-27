const { web3, myAccount } = require("./utils.js");
const { bytecode } = require("./simpleStorageBytecode-ABI.js");

async function deploy() {
  await web3.eth
    .sendTransaction({
      from: myAccount.address,
      gas: 800000,
      data: bytecode,
    })
    .on("receipt", console.log);
}

deploy();
