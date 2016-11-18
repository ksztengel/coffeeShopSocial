'use strict'
app.controller('DealController', function ($scope, DealService, $routeParams, $location) {
    console.log('in deal controller');

    DealService.all().then(shops => {
        $scope.shops = shops
        console.log("shop", shops);
        console.log("shops.data", shops.data);
    })

    $scope.view = {}
    DealService.all().then(deals => {
        $scope.deals = deals.data
        console.log("deals", deals);
        console.log("deals.data", deals.data);
    })


    $scope.newDeal = function(formData) {
      console.log("in new Deal", formData);
        DealService.create(formData).then(newDeal => {
            console.log("newDeal", newDeal);
        })
    }

    $scope.submitEdit = function(id) {
            const editDeal = $scope.oneDeal
            DealService.update(editdeal).then(results => {
                $location.url('/')
            })

        }

      })
