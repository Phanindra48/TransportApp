var transportApp = angular.module('TransportApp',[]);

transportApp.controller('mainController', ['$scope', function($scope) {

}]);
transportApp.controller('bookingsController',['$scope','$http',function($scope, $http) {
    $scope.bookings = [];
    $scope.formData = {};
    //sort table
    $scope.sortReverse  = false;
    $scope.sortType = 'name'; //default

    //get all bookings
    $scope.getBookings = function(){
        $http.get('/api/bookmarks')
        .success(function(data){
            $scope.bookings = data;
        })
        .error(function(err){
            console.log('Error: ' + err);
        });
    };
    //add bookings
    $scope.addBooking = function() {
        //console.log(booking);
        //console.log('create',booking.name);
        $scope.formData = {
            name : $scope.name,
            contact_number : $scope.contact_number,
            pickup : $scope.pickupLocation,
            drop : $scope.dropLocation
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
}]);

transportApp.controller('driversController',['$scope','$http',function($scope, $http) {
    $scope.drivers = [];
    $http.get('',function(){})
}]);

transportApp.controller('vehiclesController',['$scope','$http',function($scope, $http) {
    $scope.vehicles = [];
    $http.get('',function(){})
}]);


transportApp.directive('keypress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.keypress);
                });

                event.preventDefault();
            }
        });
    };
});


