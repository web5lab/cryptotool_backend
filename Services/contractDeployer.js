const { explorerValidator } = require('./explorerVerification');

const Web3 = require('web3');


const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s1.binance.org:8545'));
const contractABI = require('../contract/contract/testnet/erc20Simple/abi.json');
const { wallet } = require('../config/config');
const { BytecodeErc20Simple } = require('../contract/contract/testnet/erc20Simple/bytecode');




const MyContract = new web3.eth.Contract(contractABI);


const account = web3.eth.accounts.wallet.add(wallet.privateKey);
const senderAddress = account.address;
const contractDeployer =async () => {
    try {
       await MyContract.deploy({
            data: BytecodeErc20Simple,
            arguments: ["test","test",1000]
          }).send({
            from: senderAddress,
            gas: 1500000,
            gasPrice: '30000000000'
          }).then((newContractInstance) => {
            console.log('Contract deployed at:', newContractInstance.options.address);
          });
          explorerValidator()
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
   
}
module.exports ={
  contractDeployer
}




