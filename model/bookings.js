var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
    name: String,
    contact_number: String,
    pickup : String,
    drop : String
});

module.exports = mongoose.model('Booking',bookingSchema);