//Core Modulea
const http = require('http');

//External Modules
const express = require('express');

// Local Modules
const UserRequestHandler = require('./user');

const app = express();

app.use((req,res,next)=>{
    console.log("Came in first middleware",req.url, req.method);
    next();
});

app.use((req,res,next)=>{
    console.log("Came in second middleware",req.url, req.method);
    res.send("<p>Hello from Express</p>");
});

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});