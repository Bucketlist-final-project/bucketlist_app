(function () {
    "use strict";
    angular.module('interests')
    .controller('UserController', function (UserService, $location, $routeParams) {

       var user = this;

       user.items = UserService.getUserBucket();

       user.addUserBucket = function (item) {
           UserService.addUserBucket(item);
        //    $location.path('/userBucket');

           console.log(user);
       };

       user.removeUserBucket = function (item) {
           UserService.removeuserBucket(item);
       };

       user.goToUserPage =function () {
           $location.path('/userBucketDetail');
           console.log('bucket Detail works');
       };

    });

})();
