//External Modules
const express = require('express');

// Local Modules
const UserRequestHandler = require('./user');

const app = express();

app.get("/",(req,res,next)=>{
    console.log("Came in first middleware",req.url, req.method);
    //  res.send("<p>Came from first middleware</p>");
    next();
});

app.post("/submit-details",(req,res,next)=>{
    console.log("Came in second middleware",req.url, req.method);
    res.send("<p>Hello from Express</p>");
});

app.use("/",(req,res,next)=>{
    console.log("Came in another middleware",req.url, req.method);
     res.send("<p>Came from another middleware</p>");
});


const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});