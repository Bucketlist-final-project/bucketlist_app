(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', ['$http', function($http) {

        var user_bucket = [];

        var addNewBucketItem= function (newBucketItem) {
            $http.post('/bucket_list_items.json', newBucketItem).success(function() {
        });
        };

        var editNewBucketItem = function(item, Id) {
            console.log('heres item id' + Id)
            $http.put('/bucket_list_items/' + Id + '.json', item);
            console.log('the edit is posting');

        };

        var getBucketItems= function () {
            return $http.get('/bucket_list_items.json');

        };

        var getOneItem = function (){
            return $http.get('/bucket_list_items/' + Id + '.json');
        };

        var removeBucketItem = function (item, bucketItems) {
            var deletedItem = _.findWhere(bucketItems, {id: parseInt(item.id)});
                bucketItems = _.without(bucketItems, deletedItem);
                // console.log(bucketItems)
             $http.delete('/bucket_list_items/' + item.id + '.json');
        };

        var addToUserBucket = function(bucket){
            console.log('addToUserBucket firing' + bucket);
            var alreadyInBucket = _.where(user_bucket, { name: bucket.name });
            if (alreadyInBucket <= 0) {
                user_bucket.push(bucket)
            }
        };

        var addArrayToUserBucket = function(currentUser){
            // currentUser.bucket_list_items.push(user_bucket);
            // currentUser.bucket_list_items = _.flatten(currentUser.bucket_list_items)
            currentUser.bucket_list_items = user_bucket
            currentUser.update = true;
            var added_data = currentUser
            return $http.patch('/users/' + currentUser.id + '.json', added_data)
        };

        return {
            addNewBucketItem: addNewBucketItem,
            getBucketItems: getBucketItems,
            removeBucketItem: removeBucketItem,
            addArrayToUserBucket: addArrayToUserBucket,
            addToUserBucket: addToUserBucket,
            editNewBucketItem: editNewBucketItem,
            getSingleBucket: getOneItem
        };
    }]);

})();
