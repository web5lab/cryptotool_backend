const express = require('express')
const bodyParser = require('body-parser');
const databaseConnection = require('./mongoDb/db')
const cors = require('cors');
const logErrors = require('./utils/logger')
const userRoute= require('./routes/userRoutes');


const app = express()
const Port = 3005
const router = express.Router()





app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Add the error log middleware to the app
app.use(logErrors);
app.use(cors({origin:'*'}))


// routes use here
app.use('/user',userRoute);





databaseConnection(() => {
  app.listen(Port, () => {
    console.log(`server listening on port ${Port}`)
  })
})



app.get('/testapi',async (req,res)=> {
  res.send('server is active')
})

