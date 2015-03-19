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
            removeBucketItems: removeBucketItems,
            // addToUserBucket: addToUserBucket
        };
    });

})();
