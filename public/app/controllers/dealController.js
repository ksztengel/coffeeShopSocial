'use strict'
app.controller('DealController', function ($scope, DealService, $location) {
    console.log('in deal controller');
    $scope.view = {}
    DealService.all().then(deals => {
        $scope.deals = deals
        console.log("deals", deals);

        console.log("deals.data", deals.data);

    })
  })
