const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const router = express.Router();
const Vehicles = require("./models/Vehicles");
const Customers = require("./models/Customers");
const Sales = require("./models/Sales");

const app = express();

mongoose.connect("mongodb://localhost/car_db", { useMongoClient: true });
mongoose.Promise = Promise;

app.use(morgan("dev"));
app.use(bodyParser.json());

router.get("/api/vehicles", (req, res) => {
  Vehicles
    .find()
    .then(vehicles => {
        res.status(200).json(vehicles);
  });
});

router.get("/api/vehicles/:id", function(req, res) {
  Vehicles
    .findById()
    .then(vehicle => {
        res.status(200).json(vehicle);
  });
});

router.post("/api/vehicles", function(req, res) {
  res.send(200).send(res);
});

module.exports = app;
