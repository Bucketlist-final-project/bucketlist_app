(function () {
  "use strict";
  angular.module('interests')
    .factory('DetailService', function() {

        var bucketDtl = [];

        var addBucketDetail=function (newBucketDetail) {
            bucketDtl.push(newBucketDetail);
        };
        var getBucketDetail= function () {
            return bucketDtl;
        };
        var removeBucketDetail = function (item) {
            var index = bucketDtl.indexOf(item);
            bucketDtl.splice(index,1);
        };

        return {
            getBucketDetail: getBucketDetail,
            addBucketDetail: addBucketDetail,
            removeBucketDetail: removeBucketDetail,
        };
    });

})();
