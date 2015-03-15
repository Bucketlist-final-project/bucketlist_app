(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', function (BucketService, $location, $routeParams) {

       var bucket = this;

       bucket.items = BucketService.getBucketInterest();

       bucket.addBucketInterest = function (item) {
           BucketService.addBucketInterest(item);
        //    $location.path('/bucketlistitem');

           console.log(bucket);
       };
       bucket.removeBucketInterest = function (item) {
           BucketService.removeBucketInterest(item);
       };
       bucket.goToBucketPage =function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

    });

})();
