const axios = require('axios');
const { codeGenerator } = require('./customCodeGenerator');
const { erc20Simple } = require('../contract/contract/testnet/erc20Simple/code');

async function verifyContract(apiKey, contractAddress, sourceCode, contractName, compilerVersion, optimizationUsed, runs) {
    try {
        const response = await axios.post('https://api-testnet.bscscan.com/api' ,{
            module: 'contract',
            action: 'verifysourcecode',
            apikey: apiKey,
            contractaddress: contractAddress,
            sourceCode: sourceCode,
            contractname: contractName,
            compilerversion: compilerVersion,
            optimizationUsed: optimizationUsed,
        },{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }});
       return response.data;
    } catch (error) {
        console.error(error);
    }
}

const checkStatus = async () => {
    try {
      const response = await axios.get('//api-testnet.bscscan.com/api', {
        params: {
          apikey: 'CXXU62N3137QBRVC41ZNZB2V5FE37TITWB',
          guid: 'tdxptbauy8tk8akrgsuk3iaxsijlkqtddpuz2d9fjafhmudu8u',
          module: 'contract',
          action: 'checkverifystatus'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      console.log('status: ' + response.data.status);   // 0=Error, 1=Pass
      console.log('message: ' + response.data.message); // OK, NOTOK
      console.log('result: ' + response.data.result);   // result explanation
      
      
    } catch (error) {
      console.error(error);
      
    }
  }
  

const apiKey = 'CXXU62N3137QBRVC41ZNZB2V5FE37TITWB';
const sourceCode =  "shiv"


const contractName = 'TestPay';
const compilerVersion = 'v0.8.18+commit.87f61d96';
const optimizationUsed = 0; // or 0



const explorerValidator = async(tokenType,contractAddress) =>{
 await verifyContract(apiKey, contractAddress, sourceCode, contractName, compilerVersion, optimizationUsed);
}

module.exports={
    explorerValidator
}