(function () {
    "use strict";
    angular.module('interests')
    .controller('DetailController', function (DetailService, $location, $routeParams, $scope, Auth) {

       var bucketDtl = this;

       bucketDtl.items = DetailService.getBucketDetail();


      // InterestService.getInterests().success(function (data) {
      //     interestCtrl.interests = data;
      // });
      DetailService.getSingleDetail($routeParams.bucketId).success(function(data) {
        console.log('supposed data ', data);
        bucketDtl.singleItem = data;
        });

       bucketDtl.addBucketDetail = function (item) {
           DetailService.addBucketDetail(item);
           $location.path('/userBucketDetail');

           console.log(bucketDtl);
       };
       bucketDtl.removeBucketDetail = function (item) {
           DetailService.removeBucketDetail(item);
       };

       bucketDtl.goToBucketDetail = function(id){
        $location.path('/bucket_list_items/' + id);
        console.log(id)
    };

    });

})();
