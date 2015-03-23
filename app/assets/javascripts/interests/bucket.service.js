(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', function($http) {

        var user_bucket = [];

        var addBucketItems=function (newBucketItems) {
            bucket.push(newBucketItems);
        };


        var getBucketItems= function () {
            return $http.get('/bucket_list_items.json');

            // return bucket;
        };
        var removeBucketItems = function (item) {
            var index = bucket.indexOf(item);
            bucket.splice(index,1);
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
            getBucketItems: getBucketItems,
            addBucketItems: addBucketItems,
            addArrayToUserBucket: addArrayToUserBucket,
            removeBucketItems: removeBucketItems,
            addToUserBucket: addToUserBucket
            // addToUserBucket: addToUserBucket
        };
    });

})();
