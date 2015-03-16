(function () {
    "use strict";
    angular.module('interests')
    .controller('DetailController', function (DetailService, $location, $routeParams) {

       var bucketDtl = this;

    //    $scope.map = {
    //       center: {
    //         latitude: 30.8654,
    //         longitude: -43.6532
    //       },
    //       zoom: 8
    //     };

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
