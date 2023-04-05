const ascii_text_generator = require('ascii-text-generator')
const art = require('ascii-art')

const fn = async() => {
    let rendered = await art.style("Some Text", '|framed|',true)
    console.log(rendered);
    let text ="/*\n" +  ascii_text_generator("apdfggp","2") + "\n*/";
    console.log(text)
}
fn()