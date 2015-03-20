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
        var getUserBucket = function (id) {
            return $http.get('/users/' + id + '.json');
        };

      //   var getSingleItem = function(id) {
      //     return $http.get('/users/' + id + '.json');
      //     console.log(user);
      // };

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

        var addArrayToUserBucket = function(currentUser){
            console.log('addArrayToUserBucket firing ' + currentUser.first_name);
            console.log('this is the current user bucket ' + user_bucket)
            currentUser.bucket_list_items.push(user_bucket);
            currentUser.bucket_list_items = _.flatten(currentUser.bucket_list_items)
            var added_data = currentUser
            console.log('this is the array to the server' + added_data);
            return $http.patch('/users/' + currentUser.id + '.json', added_data).success(function(){

            });
        };

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeUserBucket: removeUserBucket,
            // getSingleItem: getSingleItem,
            addToUserBucket: addToUserBucket,
            addArrayToUserBucket: addArrayToUserBucket
        };
    });

})();
