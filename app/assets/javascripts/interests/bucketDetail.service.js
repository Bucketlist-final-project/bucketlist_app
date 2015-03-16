(function () {
  "use strict";
  angular.module('interests')
    .factory('DetailService', function($http) {

        var bucketDtl = [];

        var addBucketDetail=function (newBucketDetail) {
            bucketDtl.push(newBucketDetail);
        };
        var getBucketDetail= function () {
            return bucketDtl;
        };
        var getSingleDetail= function(id) {
          return $http.get('/bucket_list_items/' + id + '.json');
      };
        var removeBucketDetail = function (item) {
            var index = bucketDtl.indexOf(item);
            bucketDtl.splice(index,1);
        };

        return {
            getBucketDetail: getBucketDetail,
            addBucketDetail: addBucketDetail,
            removeBucketDetail: removeBucketDetail,
            getSingleDetail: getSingleDetail
        };
    });

})();
