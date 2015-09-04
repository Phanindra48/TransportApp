Assignment
==========

Create a RESTful python web server to provide the following API endpoints:
	
	1.  `GET /drivers` - returns all the drivers registered with the application
	2.  `GET /driver/<id>` - returns information for a single driver
	3.  `POST /drivers` - Expects information for the driver to be added in POST
     	   parameters, returns newly created driver object. 
     	   The driver has following fields - ["Name", "PhoneNumber", "VehicleNumber"]
    4.  'DELETE /driver/<id>' - deletes the driver with given id
    5.  'UPDATE /driver/<id>' - Updates the driver with given id 
	6.  `GET /bookings` - returns all the bookings registered with the application
	7.  `GET /booking/<id>` - returns information for a single booking
	8.  `POST /bookings` - Expects information for the booking to be added in POST
     	   parameters, returns newly created booking object. 
     	   The booking has following fields - ["Name", "PhoneNumber", "StartLocation", "EndLocation", "driver"]
    9.  'DELETE /booking/<id>' - deletes the booking with given id
    10. 'UPDATE /booking/<id>' - Updates the booking with given id 
    11. 'POST assign/' - Assign the driver to the booking.

    You are free to use any framework and database for the same.




Bonus:
    Create Forms for all the above models and assignment using HRML/CSS/JS, AngularJs 