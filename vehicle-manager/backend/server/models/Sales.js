const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    saleID: { type: Number, required: true},
    vehicleID: {type: String, required: true},
    customerID: {type: String, required: true},
    salePrice: {type: String, required: false},
    invoiceDate: {type: String, required: false},
    paymentDate: {type: String, required: false}
});

mongoose.exports = mongoose.model('Sale', SaleSchema)


// `saleID` INT NOT NULL,
// `vehicleID` VARCHAR(45) NOT NULL,
// `customerID` VARCHAR(45) NOT NULL,
// `salePrice` VARCHAR(45) NULL,
// `invoiceDate` VARCHAR(45) NULL,
// `paymentDate` VARCHAR(45) NULL,
// PRIMARY KEY (`saleID`))