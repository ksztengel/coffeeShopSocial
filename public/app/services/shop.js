'use strict'
app.service('ShopService', function($http) {
    return {
        all: function() {
          // console.log("doing cool http stuff");
            return $http.get('/shops.json');
        }

      }})

// console.log('service included');
