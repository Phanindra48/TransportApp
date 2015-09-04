var transportApp = angular.module('TransportApp',[]);

transportApp.controller('mainController',['$scope','$http',function($scope, $http) {

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


