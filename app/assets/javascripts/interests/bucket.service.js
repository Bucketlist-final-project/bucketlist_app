(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', ['$http', function($http) {

        var user_bucket = [];

        var addNewBucketItem= function (newBucketItem) {
            newBucketItem.image_file_name = '1.jpg'
            console.log(newBucketItem.image_file_name)
            $http.post('/bucket_list_items.json', newBucketItem).success(function() {
        });
        };

        var getBucketItems= function () {
            return $http.get('/bucket_list_items.json');

        };
        var removeBucketItems = function (item) {
            var index = bucket.indexOf(item);
            bucketCtrl.splice(index,1);
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
            currentUser.update = true;
            var added_data = currentUser
            return $http.patch('/users/' + currentUser.id + '.json', added_data)
        };

        // var addToUserBucket = function(bucket){
        //     console.log('addToUserBucket firing ' + bucket);
        //     var alreadyInBucket = _.where(user_bucket, { name: bucket.name });
        //     if (alreadyInBucket <= 0) {
        //         user_bucket.push(bucket)
        //     }
        //   };



        return {
            addNewBucketItem: addNewBucketItem,
            getBucketItems: getBucketItems,
            removeBucketItems: removeBucketItems,
            // addBucketItems: addBucketItems,
            addArrayToUserBucket: addArrayToUserBucket,
            addToUserBucket: addToUserBucket
            // addToUserBucket: addToUserBucket
        };
    }]);

})();
