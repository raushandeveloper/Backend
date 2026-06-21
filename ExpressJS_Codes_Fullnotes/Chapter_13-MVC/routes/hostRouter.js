const express = require('express');
const hostRouter = express.Router();

const hostController = require('../controllers/hostController');

// Home page (IMPORTANT)
// hostRouter.get("/", hostController.getHomes);

// Add Home page
hostRouter.get("/add-home", hostController.getAddHome);

// Form submit
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;