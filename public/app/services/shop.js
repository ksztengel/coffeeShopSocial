'use strict'
app.service('ShopService', function($http) {
    return {
        all: function() {
            return $http.get('/shops.json');
        }

      }})
