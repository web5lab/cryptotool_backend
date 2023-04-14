const mongoose = require('mongoose');
const contractVerified = new mongoose.Schema(
    {
       contarctDetails: [
          {
             currencyName:{type:String}
          },
       ],
    },
 );
 module.exports = mongoose.model('userTransaction', contractVerified);