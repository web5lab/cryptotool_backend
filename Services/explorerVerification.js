const axios = require("axios");
const { codeGenerator } = require("./customCodeGenerator");
const {
  erc20Simple,
} = require("../contract/contract/testnet/erc20Simple/code");
const { codeGen } = require("../test3");

async function verifyContract(
  apiKey,
  contractAddress,
  sourceCode,
  contractName,
  compilerVersion,
  optimizationUsed,
  runs
) {
  try {
    const response = await axios.post(
      "https://api-testnet.bscscan.com/api",
      {
        module: "contract",
        action: "verifysourcecode",
        apikey: apiKey,
        contractaddress: "0x4f98a17d92474ba0f119c87f0d720a984cff8dab",
        sourceCode,
        contractname: contractName,
        compilerversion: compilerVersion,
        optimizationUsed: optimizationUsed,
        runs: 200,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("data from response", response.data);
    checkStatus();
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const checkStatus = async () => {
  try {
    const response = await axios.get("//api-testnet.bscscan.com/api", {
      params: {
        apikey: "CXXU62N3137QBRVC41ZNZB2V5FE37TITWB",
        guid: "mmf1rvgfagbjvg1gcj9nbauy6csmsyavzwarzzpxgsqqyxja6s",
        module: "contract",
        action: "checkverifystatus",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log("status: " + response.data.status); // 0=Error, 1=Pass
    console.log("message: " + response.data.message); // OK, NOTOK
    console.log("result: " + response.data.result); // result explanation
  } catch (error) {
    console.error(error);
  }
};

const apiKey = "CXXU62N3137QBRVC41ZNZB2V5FE37TITWB";

const contractName = "StandardToken";
const compilerVersion = "v0.8.4+commit.c7e474f2";
const optimizationUsed = 0; // or 0

const explorerValidator = async (tokenType, contractAddress) => {
  const sourceCode = await codeGen("shiv", "Powered By Web5lab");
  await verifyContract(
    apiKey,
    contractAddress,
    sourceCode,
    contractName,
    compilerVersion,
    optimizationUsed
  );
};

module.exports = {
  explorerValidator,
};
