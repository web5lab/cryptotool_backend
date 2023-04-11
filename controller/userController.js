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

module.exports ={
    getContarctDetails
}