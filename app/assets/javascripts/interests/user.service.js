(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', function($http) {

        var user = [];
        var addBucket = []
        var user_bucket = []
        var completedItems = []

        var addUserBucket = function (newUserBucket) {
            newUserBucket.update = true
            $http.patch('/users/' + newUserBucket.id + '.json', newUserBucket).success(function() {
        });
        };
        var getUserBucket = function (id) {
            return $http.get('/users/' + id + '.json');
        };

      //   var getSingleItem = function(id) {
      //     return $http.get('/users/' + id + '.json');
      //     console.log(user);
      // };

        var removeBucketItem = function (item, currentUser) {
            var removeItemHash ={};
            removeItemHash.id = currentUser.id;
            removeItemHash.bucket_list_item_id = item.id;
            removeItemHash.update = false;
            var removedItem = _.findWhere(currentUser.bucket_list_items, {id: parseInt(item.id)});
            currentUser.bucket_list_items = _.without(currentUser.bucket_list_items, removedItem);
            $http.patch('/users/' + currentUser.id + '.json', removeItemHash)
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
            currentUser.bucket_list_items.push(user_bucket);
            currentUser.bucket_list_items = _.flatten(currentUser.bucket_list_items)
            var added_data = currentUser
            console.log('this is the array to the server' + added_data);
            return $http.patch('/users/' + currentUser.id + '.json', added_data).success(function(){

            });
        };

        var itemComplete = function(itemCompleteHash, currentUser){
            return $http.post('/users/' + currentUser.id + '/item_completes.json', itemCompleteHash);
        };

        // var getCompletedItems = function(currentUser){
        //     $http.get('/users/' + currentUser.id + '.json').success(function(serverData){
        //         completedItems.push(serverData);
        //         console.log(completedItems);

        //     });
        // }

        // var findUserCompletes = function(currentUser){
        //     $http.get('/users/' + currentUser + '.json').success(function(serverData){
        //         console.log(serverData.bucket_list_items)
        //         // var 
        //         // var completeHash = _.some()
        //     });
        // }

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeBucketItem: removeBucketItem,
            // getSingleItem: getSingleItem,
            addToUserBucket: addToUserBucket,
            addArrayToUserBucket: addArrayToUserBucket,
            itemComplete: itemComplete,
            // getCompletedItems: getCompletedItems,
            // findUserCompletes: findUserCompletes
        };
    });

})();


// var y = _.some(cars, function(c) {
//     return c.id == '506'; 
// });



