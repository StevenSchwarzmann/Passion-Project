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


// CREATE TABLE IF NOT EXISTS `mydb`.`Vehicle` (
//     `vehicleID` INT NOT NULL,
//     `make` VARCHAR(45) NULL,
//     `model` VARCHAR(45) NULL,
//     `year` INT NULL,
//     `color` VARCHAR(45) NULL,
//     `vehicleType` VARCHAR(45) NULL,
//     `retailPrice` VARCHAR(45) NULL,
//     PRIMARY KEY (`vehicleID`))
//   ENGINE = InnoDB;