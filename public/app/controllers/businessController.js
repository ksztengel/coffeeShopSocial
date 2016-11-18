app.controller('BusinessController', function($scope, BusinessService, $location) {
    console.log('in business controller');

    $scope.businessObj = {}

    $scope.signup = function(object) {
        BusinessService.signup(object).then(function(response) {
            console.log(object);
            console.log(response);
            $location.url('/dealform')
        })

    $scope.login = function(object) {
        BusinessService.login(object).then(function(response) {
            console.log(object);
        })

        }
    }
})
//need cookies
