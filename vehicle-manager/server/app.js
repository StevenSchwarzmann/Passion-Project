const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const router = express.Router();

const app = express();

mongoose.connect("mongodb://localhost/car_db", { useMongoClient: true });
mongoose.Promise = Promise;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/api/customers', require('../backend/server/routes/customers'));
app.use('/api/sales', require('../backend/server/routes/sales'));
app.use('/api/vehicles', require('../backend/server/routes/vehicles'));

module.exports = app;
