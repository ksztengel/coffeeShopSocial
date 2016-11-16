'use strict'
app.controller('oneDealController', function ($scope, DealService, $routeParams, $location) {
    console.log('in oneDeal controller');
    $scope.view = {}

    var id = $routeParams.id
    DealService.one(id).then(results => {
        $scope.oneDeal = results.data
    })

    // $scope.submitNew = function() {
    //     DealService.new($scope.deal).then(newDeal => {
    //         $scope.deals.push($scope.deal),
    //             $scope.deal = {},
    //             $scope.dealForm.$setPristine(),
    //             $scope.newDeal = {}
    //
    //     })
    // }

    // $scope.submitEdit = function(id) {
    //         const editDeal = $scope.oneDeal
    //         DealService.update(editdeal).then(results => {
    //             $location.url('/')
    //         })
    //     }

      })
