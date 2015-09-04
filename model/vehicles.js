var mongoose = require('mongoose');

var vehicleSchema = new mongoose.Schema({
    Model: String,
    Make: String,
    Permit : String,
    RegNo : String
});

module.exports = mongoose.model('Vehicle',vehicleSchema);