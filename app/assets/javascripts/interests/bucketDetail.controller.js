(function () {
    "use strict";
    angular.module('interests')
    .controller('DetailController', function (DetailService, $location, $routeParams) {

       var bucketDtl = this;

       bucketDtl.items = DetailService.getBucketDetail();

       bucketDtl.addBucketDetail = function (item) {
           DetailService.addBucketDetail(item);
           $location.path('/userBucketDetail');

           console.log(bucketDtl);
       };
       bucketDtl.removeBucketDetail = function (item) {
           DetailService.removeBucketDetail(item);
       };

    });

})();
