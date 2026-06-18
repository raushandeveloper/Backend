// core modules
const path = require('path');

//External Modules
const express = require('express');

// Local Modules
const rootDir = require('./utils/pathUtill');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');


const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});