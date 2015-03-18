(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', function($http) {

        var user = [];

        var addUserBucket=function (id) {
            $http.put('/users/' + id + '.json');
        };

        var getUserBucket= function () {
            return user;
        };

        var getSingleItem= function(id) {
          return $http.get('/users/' + id + '.json')
          console.log(user);
        };

        var removeUserBucket = function (item) {
            var index = user.indexOf(item);
            user.splice(index,1);
        };

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeUserBucket: removeUserBucket,
            getSingleItem: getSingleItem,
        };
    });

})();
