const { web3, myAccount } = require("./utils.js");
const { abi, address } = require("./simpleStorageBytecode-ABI.js");

let contract = new web3.eth.Contract(JSON.parse(abi), address);
// console.log(contract);

async function getter() {
  let res = await contract.methods.getter().call();
  return res;
}

async function setter(value) {
  let res = await contract.methods.setter(value).send({
    from: myAccount.address,
    gas: 80000,
  });
  return res.transactionHash;
}
// getter();

// for interacting with the browser
window.addEventListener("load", () => {
  document.getElementById("get").onclick = () => {
    getter().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r;
    });
  };
  document.getElementById("set").onclick = () => {
    value = document.getElementById("value").value;
    setter(value).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r;
    });
  };
});
