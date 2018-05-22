const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicleID: {type: Number, required: true},
    make: {type: String, required: false},
    model: {type: String, required: false},
    year: {type: Number, required: false},
    color: {type: String, required: false},
    vehicleType: {type: String, required: false},
    retailPrice: {type: String, required: false}
});

module.exports = mongoose.model('Vehicle', VehicleSchema)
