'use strict'
app.service('BusinessService', function($http) {
  console.log('business service included');
    return {
        create: function() {
          console.log("doing cool http stuff");
            return $http.post('/shop_users.json');
        }

      }})

// is data working?   form needs to be linked.
