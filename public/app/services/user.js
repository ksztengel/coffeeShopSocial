'use strict'
app.service('UserService', function($http) {
    return {
        signup: function() {
          // console.log("doing cool http stuff");
            return $http.post('/users.json');
        }

      }})
