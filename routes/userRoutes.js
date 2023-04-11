// user routes
const express = require('express');
const { getContarctDetails } = require('../controller/userController');
const router = express.Router();

// get =>
router.get("/contract",getContarctDetails)

//post => api

module.exports = router;