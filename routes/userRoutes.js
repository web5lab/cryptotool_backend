// user routes
const express = require('express');
const user = require('../controller/userController');
const router = express.Router();

// get =>
router.get("/contract",user.getContarctDetails);
// router.get("get-contract-deployment-details",user.)
router.get('/supportedNetworks',user.getContarctDetails);

//post => api
router.post("/verifyContract",user.verifyContract);

module.exports = router;