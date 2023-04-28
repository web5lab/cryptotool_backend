const axios = require('axios');
const { codeGenerator } = require('./customCodeGenerator');
const { erc20Simple } = require('../contract/contract/testnet/erc20Simple/code');
const { codeGen } = require('../test3');

async function verifyContract(apiKey, contractAddress, sourceCode, contractName, compilerVersion, optimizationUsed, runs) {
    try {
        const response = await axios.post('https://api-testnet.bscscan.com/api' ,{
            module: 'contract',
            action: 'verifysourcecode',
            apikey: apiKey,
            contractaddress: "0x8e05e8cDBb3516314bcBA0D99acE7C4469668b64",
            sourceCode: erc20Simple,
            contractname: contractName,
            compilerversion: compilerVersion,
            optimizationUsed: optimizationUsed,
        },{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }});
      console.log("data from response",response.data);
      checkStatus()
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
          guid: 'mmf1rvgfagbjvg1gcj9nbauy6csmsyavzwarzzpxgsqqyxja6s',
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
const sourceCode =  ""


const contractName = 'StandardToken';
const compilerVersion = 'v0.8.4+commit.c7e474f2';
const optimizationUsed = 0; // or 0



const explorerValidator = async(tokenType,contractAddress) =>{
 await verifyContract(apiKey, contractAddress, sourceCode, contractName, compilerVersion, optimizationUsed);
}

module.exports={
    explorerValidator
}