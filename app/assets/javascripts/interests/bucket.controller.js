(function () {
    "use strict";
    angular.module('interests')
    .controller('BucketController', ['BucketService', '$location', '$routeParams', 'Auth', '$scope', function (BucketService, $location, $routeParams, Auth, $scope) {

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
        $scope.currentUser = user
      });

      BucketService.getBucketItems().success(function(data) {
           bucketCtrl.bucketItems = {}
           bucketCtrl.bucketItems.items = data;
      });

    //   BucketService.getSingleBucket(itemId).success(function(data){
    //       bucketCtrl.singleBucket = data;
    //   })



      bucketCtrl.addNewBucketItem = function (item) {
          BucketService.addNewBucketItem(item);
          $location.path('/bucketlistitem');
          console.log(item);
       };

      bucketCtrl.addItemToUserBucket = function(bucket){
          BucketService.addToUserBucket(bucket);

       };

       bucketCtrl.addUserBucketArray = function (){

          console.log($scope.currentUser);
          BucketService.addArrayToUserBucket($scope.currentUser);
            $location.path('/users/' + $scope.currentUser.id);

       };

       bucketCtrl.editNewBucketItem= function(item) {
           BucketService.editNewBucketItem(item, $routeParams.itemId);
           console.log(item);
           console.log($routeParams);
           $location.path('/bucketlistitem');
       };

       bucketCtrl.removeBucketItem = function (item) {
           BucketService.removeBucketItem(item, bucketCtrl.bucketItems);

       };

       bucketCtrl.goToBucketPage = function () {
           $location.path('/userBucket');
           console.log('userBucket works');
       };

       bucketCtrl.goToBucketDetail = function(id){
           $location.path('/bucket_list_items/' + id);
           console.log(id)
       };

        $scope.uploadComplete = function () {
        //   $scope.response = JSON.parse(content); // Presumed content is a json string!
        //   $scope.response.style = {
        //     color: $scope.response.color,
        //     "font-weight": "bold"
        //   };

        //   // Clear form (reason for using the 'ng-model' directive on the input elements)
        //   $scope.fullname = '';
        //   $scope.gender = '';
        //   $scope.color = '';
        //   // Look for way to clear the input[type=file] element
        console.log('uploadComplete')
          $location.path('/bucketlistitem');
        };

    }]);

})();
