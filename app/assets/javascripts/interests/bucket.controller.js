(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', function (BucketService, $location, $routeParams, Auth) {

       var bucketCtrl = this;

       BucketService.getBucketItems().success(
           function(data) {
               bucketCtrl.items= data;
           });

          console.log(bucketCtrl);

       bucketCtrl.removeBucketItems = function (item) {
           BucketService.removeBucketItems(item);
       };
       bucketCtrl.goToBucketPage =function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

      // bucketCtrl.addItemToUserBucket = function(bucket){
      //   BucketService.addToUserBucket(bucket);

      //  };


    });

})();
