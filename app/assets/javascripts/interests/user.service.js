(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', ['$http', function($http) {

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

        var removeBucketItem = function (item, currentUser) {
            var removeItemHash ={};
            removeItemHash.id = currentUser.id;
            removeItemHash.bucket_list_item_id = item.id;
            removeItemHash.update = false;
            var removedItem = _.findWhere(currentUser.bucket_list_items, {id: parseInt(item.id)});
            currentUser.bucket_list_items = _.without(currentUser.bucket_list_items, removedItem);
            $http.patch('/users/' + currentUser.id + '.json', removeItemHash)
        };


        var itemComplete = function(itemCompleteHash, completedList, bucketItem){
            var hash = {}
            hash.bucket_list_item = bucketItem
            completedList.push(hash)
            console.log(completedList)
            return $http.post('/users/' + itemCompleteHash.user_id + '/item_completes.json', itemCompleteHash);
        };

        var getCompletedItems = function(id) {
            return $http.get('/users/' + id + '/item_completes.json')
        }

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
            itemComplete: itemComplete,
            getCompletedItems: getCompletedItems,
            // findUserCompletes: findUserCompletes
        };
    });

}])();
