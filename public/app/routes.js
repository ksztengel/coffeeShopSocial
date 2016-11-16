app.config(function($routeProvider) {
  console.log('attempt to route this YO!');
    $routeProvider
        .when('/', {
            templateUrl: './app/views/shop.html',
            controller: 'ShopController'
        })
        .when('/signup', {
            templateUrl: './app/views/businessSignup.html',
            controller: 'BusinessController'
        })
        .when('/deals', {
            templateUrl: './app/views/deals.html',
            controller: 'DealController'
        })
})

console.log('routes included');
