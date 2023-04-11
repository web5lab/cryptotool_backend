const ascii_text_generator = require('ascii-text-generator')
const art = require('ascii-art')
const { erc20Simple } = require('./contract/contract/testnet/erc20Simple/code')
const { SpdxLicense } = require('./config/config')


const fn = async() => {
    let rendered = await art.style("Some Text", '|framed|',true)
    console.log(rendered);
    let text =SpdxLicense+"\n"+"/*\n" +  ascii_text_generator("apdfggp","2") + "\n*/" + erc20Simple;
    console.log(text)
}
fn()