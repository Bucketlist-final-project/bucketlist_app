(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', ['$http', '$rootScope', function($http, $rootScope) {

        var user_bucket = [];

        var addNewBucketItem= function (newBucketItem) {
            newBucketItem.image_file_name = 'default.jpg'
            $http.post('/bucket_list_items.json', newBucketItem).success(function() {
                $rootScope.$broadcast('BasketItem:added');
                console.log('it worked');
            });
        };

        var editNewBucketItem = function(item, Id) {
            console.log('heres item id' + Id)
            $http.put('/bucket_list_items/' + Id + '.json', item);
            console.log('the edit is posting');
            $rootScope.$broadcast('BasketItem:edited');

        };

        var getBucketItems= function () {
            return $http.get('/bucket_list_items.json');

        };

        var getOneItem = function (){
            return $http.get('/bucket_list_items/' + Id + '.json');
        };

        var removeBucketItem = function (item, bucketItems) {
            $http.delete('/bucket_list_items/' + item.id + '.json').success(function(){
                console.log(bucketItems.items)
            var deletedItem = _.findWhere(bucketItems.items, {id: parseInt(item.id)});
                bucketItems.items = _.without(bucketItems.items, deletedItem);
                console.log('test ' + bucketItems.items)
             })
        };

        var addToUserBucket = function(bucket){
            console.log('addToUserBucket firing' + bucket);
            var alreadyInBucket = _.where(user_bucket, { name: bucket.name });
            if (alreadyInBucket <= 0) {
                user_bucket.push(bucket)
            }
        };

        var addArrayToUserBucket = function(currentUser){
            currentUser.bucket_list_items = user_bucket
            currentUser.update = true;
            var added_data = currentUser
            user_bucket = []
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
