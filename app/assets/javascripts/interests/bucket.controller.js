(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', function (BucketService, $location, $routeParams, Auth) {

       var bucketCtrl = this;

       BucketService.getBucketItems().success(function(data) {
           bucketCtrl.items = data;
       });

       bucketCtrl.addNewBucketItem = function (item) {
           BucketService.addNewBucketItem(item);
           $location.path('/bucketlistitem');
       };

       bucketCtrl.removeBucketItems = function (item) {
           BucketService.removeBucketItems(item);
       };
       bucketCtrl.goToBucketPage = function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

       bucketCtrl.goToBucketDetail = function(id){
           $location.path('/bucket_list_items/' + id);
           console.log(id)
       };

    });

})();
