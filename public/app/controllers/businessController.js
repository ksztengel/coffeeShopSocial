app.controller('BusinessController', function($scope, BusinessService) {
  console.log('in business controller');
    $scope.userObj = {}
    $scope.businessObj = {}

    $scope.signup = function(object) {
      console.log(object);
    }
    $scope.login = function (object) {
      console.log(object);
    }

})
