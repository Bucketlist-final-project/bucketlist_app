(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', function($http) {

        var user_bucket = [];

        var addNewBucketItem= function (newBucketItem) {
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

        return {
            addNewBucketItem: addNewBucketItem,
            getBucketItems: getBucketItems,
            removeBucketItems: removeBucketItems,
        };
    });

})();
