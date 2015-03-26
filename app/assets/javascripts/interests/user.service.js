(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', ['$http', '$rootScope', function($http, $rootScope) {

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
            $http.patch('/users/' + currentUser.id + '.json', removeItemHash).success(function(){
            var removedItem = _.findWhere(currentUser.bucket_list_items, {id: parseInt(item.id)});
            currentUser.bucket_list_items = _.without(currentUser.bucket_list_items, removedItem); });
        };

        var itemComplete = function(itemCompleteHash, completedList, bucketItem){
            var hash = {}
            hash.bucket_list_item = bucketItem
            completedList.push(hash)
            console.log(completedList)
            return $http.post('/users/' + itemCompleteHash.user_id + '/item_completes.json', itemCompleteHash).success(function(){
            $rootScope.$broadcast('BasketItem:completed');
        });
        };

        var getCompletedItems = function(id) {
            return $http.get('/users/' + id + '/item_completes.json');

        }

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeBucketItem: removeBucketItem,
            itemComplete: itemComplete,
            getCompletedItems: getCompletedItems,

        };
    }]);

})();
