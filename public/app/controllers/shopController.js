app.controller('ShopController', function ($scope, $cookies, ShopService, $location, ) {

    $scope.view = {}
    ShopService.all().then(shops => {
        $scope.shops = shops.data
        console.log("shops.data", shops.data);

    })
