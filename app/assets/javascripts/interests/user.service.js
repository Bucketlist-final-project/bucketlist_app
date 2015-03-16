(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', function() {

        var user = [];

        var addUserBucket=function (newUserBucket) {
            user.push(newUserBucket);
        };
        var getUserBucket= function () {
            return user;
        };
        var removeUserBucket = function (item) {
            var index = user.indexOf(item);
            user.splice(index,1);
        };

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeUserBucket: removeUserBucket,
        };
    });

})();
