const { contractConfig } = require("../contract/config")

const getContarctData = async (tokenType) => {
if (tokenType =="erc20Simple"){
  const data = {
    bytecode:contractConfig.erc20Simple.bytecode,
    abi:contractConfig.erc20Simple.abi
  }
  return data;
}
return {
  data:"invalid token"
}
}

module.exports ={
    getContarctData
}