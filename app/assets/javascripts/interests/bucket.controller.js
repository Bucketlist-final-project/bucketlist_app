(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', function (BucketService, $location, $routeParams) {

       var bucket = this;

       BucketService.getBucketItems().success(
           function(data) {
               bucket.items= data;
           });
    //    bucket.addBucketItems = function (item) {
    //        BucketService.addBucketItems(item);
           //$location.path('/bucketlistitem');

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
