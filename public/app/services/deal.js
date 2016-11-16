'use strict'
app.service('DealService', function($http) {
    return {
        all: function() {
          // console.log("doing cool http stuff");
            return $http.get('/deals.json');
        }

      }})
