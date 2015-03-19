(function () {
    "use strict";
    angular.module('interests')
    .controller('UserController', function (UserService, $location, $routeParams, $scope, Auth) {

       var user = this;

       Auth.currentUser().then(function(user) {
        console.log(user.id);
        $scope.currentUser = user
      });

       user.items = UserService.getUserBucket();

       UserService.getSingleItem($routeParams.userId).success(function(data) {
         console.log('supposed data ', data);
         user.singleItem = data;
         });

       user.addUserBucket = function (item) {
           $scope.currentUser.bucket_list_items.push(item);
           UserService.addUserBucket($scope.currentUser);
           $location.path('/users/' + $scope.currentUser.id);
           // UserService.addUserBucket(item);
       };

       user.removeUserBucket = function (item) {
           UserService.removeuserBucket(item);
       };
       user.submitBucket = function (item) {
           UserService.addUserBucket($scope.currentUser);
           console.log('submit button works')
       }

       user.goToBucket = function(id){
        $location.path('/users/' + $scope.currentUser.id);
       }

        user.addItemToUserBucket = function(bucket){
          console.log(bucket)
          UserService.addToUserBucket(bucket);

       };


        user.addUserBucketArray = function () {
          UserSevice.addArrayToUserBucket($scope.currentUser);
       //  //    $scope.currentUser.bucket_list_items.push(item);
       //  //    UserService.addUserBucket($scope.currentUser);
       //     $location.path('/users/' + $scope.currentUser.id);
       //  //    console.log("this user add works");
       //  //    console.log(item);
       };

    });

})();
