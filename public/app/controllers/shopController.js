'use strict'
app.controller('ShopController', function ($scope, ShopService, $routeParams, $location) {
    console.log('in shop controller');
    $scope.view = {}
    ShopService.all().then(shops => {
        $scope.shops = shops
        
    })

    var id = $routeParams.id
    if(id){
    ShopService.one(id).then(results => {
        $scope.oneShop = results.data

    })
  }

  })
