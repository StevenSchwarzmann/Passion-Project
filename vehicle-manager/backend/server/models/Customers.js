const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema ({
    customerID: {type: Number, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    emailAddress: {type: String, required: false},
    telephone: {type: String, required: false},
    dateOfBirth: {type: String, required: false},
});

module.exports = mongoose.model('Customer', CustomerSchema)
