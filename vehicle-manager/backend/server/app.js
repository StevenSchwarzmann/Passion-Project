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

app.use('/api/customers', require('./routes/customers'));
app.use('/api/sales', require('./routes/sales'));
app.use('/api/vehicles', require('./routes/vehicles'));

module.exports = app;
