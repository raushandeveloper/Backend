//Core Modules
const path = require('path');

// External Modules
const express = require('express');
const userRouter = express.Router();

//Local Modules
const rootDir = require('../utils/pathUtill');

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","home.html"));
})

module.exports = userRouter;