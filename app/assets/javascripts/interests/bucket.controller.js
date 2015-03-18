(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', function (BucketService, $location, $routeParams, Auth) {

       var bucket = this;

       BucketService.getBucketItems().success(
           function(data) {
               bucket.items= data;
           });

          console.log(bucket);

       bucket.removeBucketItems = function (item) {
           BucketService.removeBucketItems(item);
       };
       bucket.goToBucketPage =function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

    });

})();
