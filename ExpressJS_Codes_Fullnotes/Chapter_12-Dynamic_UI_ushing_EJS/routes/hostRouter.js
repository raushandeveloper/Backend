//Core Modules
const path = require('path');

// External Modules
const express = require('express');
const hostRouter = express.Router();

//Local Modules 
const rootDir = require('../utils/pathUtill');

hostRouter.get("/add-home",(req,res,next)=>{
    res.render('addHome',{ pageTitle: "Add Home to airbnb" });
})

const registeredHomes = [];

hostRouter.post("/add-home",(req,res,next)=>{
    console.log('Home Registration successful for:',req.body,req.body.houseName);
    registeredHomes.push({houseName: req.body.houseName});
    res.render('homeAdded',{ pageTitle: "Home Added Successfully" });
});


module.exports = {
    hostRouter,
    registeredHomes
};
