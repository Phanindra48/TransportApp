var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
    Name: String,
    PhoneNumber: String,
    StartLocation : String,
    EndLocation : String
});

module.exports = mongoose.model('Booking',bookingSchema);