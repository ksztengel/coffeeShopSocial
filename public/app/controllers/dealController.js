'use strict'
app.controller('DealController', function ($scope, DealService, $routeParams, $location) {
    console.log('in deal controller');
    $scope.view = {}
    DealService.all().then(deals => {
        $scope.deals = deals.data
        console.log("deals", deals);
        console.log("deals.data", deals.data);
    })


    $scope.submitNew = function() {
        DealService.new($scope.deal).then(newDeal => {
            $scope.deals.push($scope.deal),
                $scope.deal = {},
                $scope.dealForm.$setPristine(),
                $scope.newDeal = {}

        })
    }

    $scope.submitEdit = function(id) {
            const editDeal = $scope.oneDeal
            DealService.update(editdeal).then(results => {
                $location.url('/')
            })

        }

      })
