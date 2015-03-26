(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', ['BucketService', '$location', '$routeParams', 'Auth', '$scope', '$rootScope', function (BucketService, $location, $routeParams, Auth, $scope, $rootScope) {

       var bucketCtrl = this;

       BucketService.getBucketItems().success(function(data) {
           bucketCtrl.items = data;
       });

       bucketCtrl.addNewBucketItem = function (item) {
           console.log(item)
           BucketService.addNewBucketItem(item);
           $location.path('/bucketlistitem');
           };

      Auth.currentUser().then(function(user) {
        $rootScope.currentUser = user
      });

      BucketService.getBucketItems().success(function(data) {
           $scope.bucketItems = {}
           $scope.bucketItems.items = data;
      });

      $scope.$on('BasketItem:added', function() {
          BucketService.getBucketItems().success(function(data) {
               $scope.bucketItems = {}
               $scope.bucketItems.items = data;
          });
      });


      bucketCtrl.addNewBucketItem = function (item) {
          BucketService.addNewBucketItem(item);
          $location.path('/bucketlistitem');
          console.log(item);
       };

      bucketCtrl.addItemToUserBucket = function(bucket){
          BucketService.addToUserBucket(bucket);

       };

       bucketCtrl.addUserBucketArray = function (){


          BucketService.addArrayToUserBucket($rootScope.currentUser);
            $location.path('/users/' + $scope.currentUser.id);
       };

       bucketCtrl.editNewBucketItem= function(item) {
           BucketService.editNewBucketItem(item, $routeParams.itemId);
           console.log(item);
           console.log($routeParams);
           $location.path('/bucketlistitem');
       };

       bucketCtrl.removeBucketItem = function (item) {
           BucketService.removeBucketItem(item, $scope.bucketItems);

       };

       bucketCtrl.goToBucketPage = function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

       bucketCtrl.goToBucketDetail = function(id){
           $location.path('/bucket_list_items/' + id);
           console.log(id)
       };

        $rootScope.uploadComplete = function () {
          $rootScope.$broadcast('BasketItem:added');
          // console.log('uploadComplete')
          // $location.path('/bucketlistitem');
        };

    }]);

})();
