const express = require("express");
const DevController = require("./controllers/DevControllers");
const routes = express.Router();

routes.post("/dev", DevController.store);

module.exports = routes;
