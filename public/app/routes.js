app.config(function($routeProvider) {
  console.log('attempt to route this YO!');
    $routeProvider
        .when('/', {
            templateUrl: './app/views/shop.html',
            controller: 'ShopController'
        })
        .otherwise('/', {
            templateUrl: './app/views/shop.html',
            controller: 'ShopController'
        })
})

console.log('routes included');
