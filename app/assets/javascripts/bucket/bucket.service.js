(function () {
  "use strict";
  angular.module('charlestonBucketList')
    .factory('InterestService', function(_) {
        var cart = [];

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
