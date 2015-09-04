var mongoose = require('mongoose');

var driverSchema = new mongoose.Schema({
    Name: String,
    PhoneNumber: String,
    VehicleNumber : String
});

module.exports = mongoose.model('Driver',driverSchema);