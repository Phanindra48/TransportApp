var express  = require('express');
var app      = express();                                                
var morgan = require('morgan');           
var mongoose = require('mongoose');  
var bodyParser = require('body-parser');  
var methodOverride = require('method-override');
var config  = require('./config');
var Booking = require('./model/bookings'); 
var Driver = require('./model/drivers');
var Vehicle = require('./model/vehicles');


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());




mongoose.connect(config.database,function(error){
    if (error) console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?',error);
    else console.log('mongo connected to -> ',config.database);
});


// application -------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//api
app.get('/api/bookings', function(req, res) {
    //console.log('before find');
    // use mongoose to get all bookings in the database
    Booking.find(function(err, bookings) {
        //console.log('get bookings server side');
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(bookings); // return all bookings in JSON format
    });
});

// create booking and send back all bookings after creation
app.post('/api/bookings', function(req, res) {
    //console.log('server api got hit');
    var booking = new Booking({
        name: req.body.name,
        contact_number: req.body.contact_number,
        pickup : req.body.pickup,
        drop : req.body.drop
    });
    //console.log(booking);
    // create a booking, information comes from AJAX request from Angular
    booking.save(function(err, records) {
        if (err)
            res.send(err);

        // get and return all the bookings after you create another
        Booking.find(function(err, bookings) {
            if (err)
                res.send(err)
            res.json(bookings);
        });
    });

});

// delete a booking
app.delete('/api/bookings/:booking_id', function(req, res) {
    Booking.remove({
        _id : req.params.booking_id
    }, function(err, records) {
        if (err)
            res.send(err);

        // get and return all the bookings after you create another
        Booking.find(function(err, bookings) {
            if (err)
                res.send(err)
            res.json(bookings);
        });
    });
});

/* Driver api calls*/

app.get('/api/drivers', function(req, res) {
    //console.log('before find');
    // use mongoose to get all drivers in the database
    Driver.find(function(err, drivers) {
        //console.log('get drivers server side');
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(drivers); // return all drivers in JSON format
    });
});

// create driver and send back all drivers after creation
app.post('/api/drivers', function(req, res) {
    //console.log('server api got hit');
    var driver = new Driver({
        name: req.body.name,
        contact_number: req.body.contact_number,
        vehicle_number : req.body.vehicle_number
    });
    //console.log(driver);
    // create a driver, information comes from AJAX request from Angular
    driver.save(function(err, records) {
        if (err)
            res.send(err);

        // get and return all the drivers after you create another
        Driver.find(function(err, drivers) {
            if (err)
                res.send(err)
            res.json(drivers);
        });
    });

});

// delete a driver
app.delete('/api/drivers/:driver_id', function(req, res) {
    Driver.remove({
        _id : req.params.driver_id
    }, function(err, records) {
        if (err)
            res.send(err);

        // get and return all the drivers after you create another
        Driver.find(function(err, drivers) {
            if (err)
                res.send(err)
            res.json(drivers);
        });
    });
});
// listen (start app with node server.js) ======================================
app.listen(config.port);
console.log("App listening on port " + config.port);
