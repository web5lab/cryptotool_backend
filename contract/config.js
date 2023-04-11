const { BytecodeErc20Simple } = require("./contract/testnet/erc20Simple/bytecode");
const { erc20Simple } = require("./contract/testnet/erc20Simple/code");
const erc20SimpleAbi = require("../contract/contract/testnet/erc20Simple/abi.json")

const contractConfig = {
    erc20Simple:{
        code:erc20Simple,
        bytecode:BytecodeErc20Simple,
        abi:erc20SimpleAbi
    }
}

module.exports = {
    contractConfig
}