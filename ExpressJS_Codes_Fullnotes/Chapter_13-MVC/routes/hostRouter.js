const express = require('express');
const hostRouter = express.Router();

const homesController = require('../controllers/homes');

// Home page (IMPORTANT)
hostRouter.get("/", homesController.getHomes);

// Add Home page
hostRouter.get("/add-home", homesController.getAddHome);

// Form submit
hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;