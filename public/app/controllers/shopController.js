'use strict'
app.controller('ShopController', function ($scope, ShopService, $location) {
    console.log('in shop controller');
    $scope.view = {}
    ShopService.all().then(shops => {
        $scope.shops = shops
        // console.log("shop", shops);
        //
        // console.log("shops.data", shops.data);

    })
  })
