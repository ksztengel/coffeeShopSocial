app.controller('BusinessController', function($scope, BusinessService) {
  console.log('in business controller');

    $scope.businessObj = {}

    $scope.signup = function(object) {
      BusinessService.signup().then(function() {
      console.log(object);
    })
//     $scope.login = function (object) {
//       BusinessService.login().then(function() {
//       console.log(object);
//     }
//
// })
}
})


//need to use business service and route is in shops_users controller to find.
