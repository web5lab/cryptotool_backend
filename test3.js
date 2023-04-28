const ascii_text_generator = require('ascii-text-generator');
const { SpdxLicense } = require('./config/config');
const { erc20Simple } = require('./contract/contract/testnet/erc20Simple/code');

// this code create custom code to verify token data
const codeGenerator = async(tokenType,customName) => {
    let text =SpdxLicense+"\n"+"/*\n" +  ascii_text_generator(customName,"2") + "\n*/" + erc20Simple;
    // console.log(text)
    return text
}
codeGenerator("test","test Token web5lab")

const codeGen = codeGenerator
module.exports ={
  codeGen
}