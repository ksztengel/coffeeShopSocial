app.config(function($routeProvider) {
  console.log('attempt to route this YO!');
    $routeProvider
        .when('/', {
            templateUrl: './app/views/main.html',
            controller: 'DealController'
        })
        .when('/signup', {
            templateUrl: './app/views/businessSignup.html',
            controller: 'BusinessController'
        })
        .when('/newdeal', {
            templateUrl: './app/views/deal.html',
            controller: 'DealController'

        })
        // .when('/deals', {
        //     templateUrl: './app/views/deals.html',
        //     controller: 'DealController'
        //
        // })
        .when('/login', {
            templateUrl: './app/views/businessLogin.html',
            controller: 'BusinessController'
        })
        .when('/deals/:id', {
            templateUrl: './app/views/deal.html',
            controller: 'oneDealController'
        })
})

console.log('routes included');
