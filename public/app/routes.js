app.config(function($routeProvider) {
  console.log('attempt to route this YO!');
    $routeProvider
        .when('/', {
            templateUrl: './app/views/main.html',
            controller: 'ShopController'
        })
        .when('/signup', {
            templateUrl: './app/views/businessSignup.html',
            controller: 'BusinessController'
        })
        .when('/newdeal', {
            templateUrl: './app/views/deal.html',
            controller: 'DealController'

        })
        .when('/deals', {
            templateUrl: './app/views/deals.html',
            controller: 'DealController'

        })
        .when('/newuser', {
            templateUrl: './app/views/userSignup.html',
            controller: 'UserController'
        })
        .when('/deal/:id', {
            templateUrl: './app/views/deal.html',
            controller: 'oneDealController'
        })
        .when('/dealfrom', {
            templateUrl: './app/vies/dealsForm.html',
            controller: ''
        })
})

console.log('routes included');
