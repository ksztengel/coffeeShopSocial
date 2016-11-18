'use strict'
app.service('BusinessService', function($http) {

    return {
        signup: function(user) {

            return $http.post('/shop_users.json', user);

        },
        login: function() {
          
            return $http.get('/shop_users.' + id + 'json');

        }
    }
})
