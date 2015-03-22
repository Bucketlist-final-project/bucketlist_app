(function () {
    "use strict";
    angular.module('interests')
    .controller('UserController', function (UserService, $location, $routeParams, $scope, Auth) {

       var user = this;

      Auth.currentUser().then(function(user) {
        // console.log(user.id);
        $scope.currentUser = user
      });

       // UserService.findUserCompletes($routeParams.userId);

       // UserService.getUserBucket($routeParams.userId).success(function(data){
       //  user.items = data
       // })
       // user.items = UserService.getUserBucket($scope.currentUser);

       // UserService.getSingleItem($routeParams.userId).success(function(data) {
       //   console.log('supposed data ', data);
       //   user.singleItem = data;
       //   });

      

       user.addUserBucket = function (item) {
           $scope.currentUser.bucket_list_items.push(item);
           UserService.addUserBucket($scope.currentUser);
           $location.path('/users/' + $scope.currentUser.id);
       };

       user.removeBucketItem = function (item) {
           UserService.removeBucketItem(item, $scope.currentUser);
       };
       
       user.submitBucket = function (item) {
           UserService.addUserBucket($scope.currentUser);
           // console.log('submit button works')
       }

       user.goToBucket = function(id){
        $location.path('/users/' + $scope.currentUser.id);
       }

        user.addItemToUserBucket = function(bucket){
          // console.log(bucket)
          UserService.addToUserBucket(bucket);

       };

        user.addItemUserBucket = function (){
          UserService.addArrayToUserBucket($scope.currentUser);
          $location.path('/users/' + $scope.currentUser.id);
       };

       user.userItemCompleted = function(bucket){
          var itemCompleteHash = {};
          var itemComplete = {}
          itemComplete.completed = true
          itemCompleteHash.bucket_list_item_id = bucket.id;
          itemCompleteHash.item_complete = itemComplete;
          itemCompleteHash.user_id = $scope.currentUser;
          console.log('completeHash ' + itemCompleteHash)
          UserService.itemComplete(itemCompleteHash, $scope.currentUser);

       };

       user.completedBucketItems = function(){
        UserService.getCompletedItems($scope.currentUser);
        var completes = $scope.currentUser.bucket_list_items.item_completes;
        console.log(completes)
       };



    });

})();
