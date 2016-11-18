'use strict'
app.service('DealService', function($http) {
    return {
        all: function() {
            return $http.get('/deals.json');
        },
        allShops: function() {
            return $http.get('/shops.json');
        },
        one: function(id) {
         console.log("doing cool http stuff");
            return $http.get('/deals/' + id + '.json');
        },
        create: function(deal) {
            return $http.post('/deals.json');
        },
        update: function(id) {
            return $http.put('/deals/' + id + '.json');
        },
        delete: function(id) {
            return $http.get('/deals/' + id + '.json');
        }

      }})
