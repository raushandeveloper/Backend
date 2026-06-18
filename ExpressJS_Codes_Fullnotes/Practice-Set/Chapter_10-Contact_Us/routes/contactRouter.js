//core Modules
const path = require('path');

//External Modules
const express = require('express');

// Local Modules
const rootDir = require('../utils/pathUtill');

const ContactRouter = express.Router();


ContactRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

ContactRouter.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','contact-success.html'));
});

module.exports = ContactRouter;