var transportApp = angular.module('TransportApp', []);

transportApp.controller('mainController', ['$scope', function($scope) {

}]);
transportApp.controller('bookingsController', ['$scope', '$http', function($scope, $http) {
    $scope.bookings = [];
    $scope.formData = {};
    //sort table
    $scope.sortReverse = false;
    $scope.sortType = 'name'; //default

    //get all bookings
    $scope.getBookings = function() {
        $http.get('/api/bookings')
            .success(function(data) {
                console.log(data);
                $scope.bookings = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
    //add bookings
    $scope.addBooking = function() {
        //console.log(booking);
        //console.log('create',booking.name);
        $scope.formData = {
            name: $scope.name,
            contact_number: $scope.contact_number,
            pickup: $scope.pickupLocation,
            drop: $scope.dropLocation
        };
        $http.post('/api/bookings', $scope.formData)
            .success(function(data) {
                $scope.bookings = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
    //delete a booking

    $scope.deleteBooking = function(id){

        $http.delete('/api/bookings/' + id)
            .success(function(data) {
                $scope.bookings = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
}]);

transportApp.controller('driversController', ['$scope', '$http', function($scope, $http) {
    $scope.drivers = [];
    $http.get('', function() {})

    $scope.sortReverse = false;
    $scope.sortType = 'name'; //default

    //get all drivers
    $scope.getDrivers = function() {
        $http.get('/api/drivers')
            .success(function(data) {
                console.log(data);
                $scope.drivers = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
    //add drivers
    $scope.addDriver = function() {
        //console.log(driver);
        //console.log('create',driver.name);
        $scope.formData = {
            name: $scope.name,
            contact_number: $scope.contact_number,
            vehicle_number: $scope.vehicle_number
        };
        $http.post('/api/drivers', $scope.formData)
            .success(function(data) {
                $scope.drivers = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
    //delete a driver
    $scope.deleteDriver = function(id){

        $http.delete('/api/drivers/' + id)
            .success(function(data) {
                $scope.drivers = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };

}]);



transportApp.controller('vehiclesController', ['$scope', '$http', function($scope, $http) {
    $scope.vehicles = [];
    $http.get('', function() {})
}]);


transportApp.directive('keypress', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.keypress);
                });

                event.preventDefault();
            }
        });
    };
});

/*
// Declared route 
transportApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/drivers', {
        templateUrl: 'views/bookings.html',
        controller: 'bookingsController'
    });
}])
*/
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
    console.log(e.target) // activated tab
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var target = $(e.target).attr("href") // activated tab
    if (target == "#bookings") {
        angular.element('#bookings').scope().getBookings();
    }
});
