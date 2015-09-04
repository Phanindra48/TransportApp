var mongoose = require('mongoose');

var driverSchema = new mongoose.Schema({
    name: String,
    contact_number: String,
    vehicle_number : String
});

module.exports = mongoose.model('Driver',driverSchema);