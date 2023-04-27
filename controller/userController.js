const { explorerValidator } = require("../Services/explorerVerification")
const { getContarctData } = require("../Services/getContractDetails")
const { contractController } = require("./contractController")

const deployContract = async(req,res) => {
 const tokenType = req.body.tokenType
 const tokenData = req.body.tokenData
 contractController(tokenType,tokenData)
}

const getContarctDetails = async(req,res) => {
    const tokenType = req.query.tokenType;
    const data =  await getContarctData(tokenType)
    res.json(data)
}

const getSupportedNetworks = async(req,res) => {

}

const verifyContract = async(req,res) => {
    const tokenType = req.body.tokenType
    const tokenAddress = req.body.tokenAddress
    const network = req.body.network;
    const data = await  explorerValidator(tokenType,tokenAddress,network);
}

const ContractDeployer = async (req,res) => {
    const tokenType = req.query.tokenType;
}

module.exports ={
    getContarctDetails,
    verifyContract,
    getSupportedNetworks
}