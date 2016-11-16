'use strict'
app.service('ShopService', function($http) {
    return {
        all: function() {
          // console.log("doing cool http stuff");
            return $http.get('/shops.json');
        },

        one: function(id) {

            return $http.get('/shops/' + id + '.json');
        }

      }})

// console.log('service included');
