app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '',
            controller: ''
        })
        .when('businessSignup', {
            templateUrl: 'businessSignup.html',
            controller: 'auth'
        })
})
