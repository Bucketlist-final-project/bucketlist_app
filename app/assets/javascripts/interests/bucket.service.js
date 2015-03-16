(function () {
  "use strict";
  angular.module('interests')
    .factory('BucketService', function() {

        var bucket = [];

        var addBucketInterest=function (newBucketInterest) {
            bucket.push(newBucketInterest);
        };
        var getBucketInterest= function () {
            return bucket;
        };
        var removeBucketInterest = function (item) {
            var index = bucket.indexOf(item);
            bucket.splice(index,1);
        };

        return {
            getBucketInterest: getBucketInterest,
            addBucketInterest: addBucketInterest,
            removeBucketInterest: removeBucketInterest,
        };
    });

})();
