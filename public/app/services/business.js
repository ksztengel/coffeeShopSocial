'use strict'
app.service('BusinessService', function($http) {
    console.log('business service included');
    return {
        signup: function(user) {

            console.log("doing cool http stuff");
            return $http.post('/shop_users.json', user);

        },
        login: function() {

            console.log("doing cool http stuff");
            return $http.get('/shop_users.' + id + 'json');

        }
    }
})
