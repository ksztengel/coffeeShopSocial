'use strict'
app.controller('UserController', function ($scope, UserService, $location) {
    console.log('in user controller');

    $scope.userObj = {}

    $scope.signup = function() {
        UserService.signup().then(function() {

        })
    }


    })
