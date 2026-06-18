//Core Modules
const path = require('path');

// External Modules
const express = require('express');

// Local Modules
const rootDir = require('../utils/pathUtill');

const homeRouter = express.Router();

homeRouter.get("/",(req,res,next)=>{
    console.log("Handling / for GET",req.url, req.method);
    res.sendFile(path.join(rootDir,'views','home.html'));
})

module.exports = homeRouter;