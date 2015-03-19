(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', function($http) {

        var user = [];
        var addBucket = []
        var user_bucket = []

        var addUserBucket=function (newUserBucket) {
            $http.patch('/users/' + newUserBucket.id + '.json', newUserBucket ).success(function() {
        });
        };
        var getUserBucket= function () {
            return user;
        };

        var getSingleItem= function(id) {
          return $http.get('/users/' + id + '.json');
          console.log(user);
      };

        var removeUserBucket = function (item) {
            var index = user.indexOf(item);
            user.splice(index,1);
        };

        var addToUserBucket = function(bucket){
            console.log('addToUserBucket firing ' + bucket);
            var alreadyInBucket = _.where(user_bucket, { name: bucket.name });
            if (alreadyInBucket <= 0) {
                user_bucket.push(bucket)
            }
            console.log(user_bucket)
        };

        var addArrayToUserBucket = function(){
            console.log('addArrayToUserBucket firing ');
        //     var alreadyInBucket = _.where(user_bucket, { name: bucket.name });
        //     if (alreadyInBucket <= 0) {
        //         user_bucket.push(bucket)
        //     }
        //     console.log(user_bucket)
        };

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeUserBucket: removeUserBucket,
            getSingleItem: getSingleItem,
            addToUserBucket: addToUserBucket,
            addArrayToUserBucket: addArrayToUserBucket
        };
    });

})();
