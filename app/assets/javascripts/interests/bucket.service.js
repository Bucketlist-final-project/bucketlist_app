(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', function($http) {

        var bucket = [];

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

        return {
            getBucketItems: getBucketItems,
            addBucketItems: addBucketItems,
            removeBucketItems: removeBucketItems,
        };
    });

})();
