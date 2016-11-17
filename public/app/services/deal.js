'use strict'
app.service('DealService', function($http) {
    return {
        all: function() {
            return $http.get('/deals.json');
        },
        one: function(id) {
          console.log("doing cool http stuff");
            return $http.get('/deals/' + id + '.json');
        },
        create: function() {
            return $http.post('/deals.json');
        },
        update: function(id) {
            return $http.put('/deals/' + id + '.json');
        },
        delete: function(id) {
            return $http.get('/deals/' + id + '.json');
        }

      }})

app.service('newDealService', function(){
  console.log('ok what now');
})
