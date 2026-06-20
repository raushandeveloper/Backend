//Core Modules
const path = require('path');

//External module
const express = require('express');

// Local Modules
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtill');
const errorsController = require('./controllers/errors');

const app =  express();

app.set("view engine","ejs");
app.set('views','views');
 
app.use(express.urlencoded());

app.use(userRouter);        // home page
app.use("/host",hostRouter); // add home


app.use(express.static(path.join(rootDir,"public")));

const homesController = require('./controllers/homes');
app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});

exports.hostRouter = hostRouter;