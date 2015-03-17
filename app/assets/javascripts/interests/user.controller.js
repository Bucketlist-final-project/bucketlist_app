(function () {
    "use strict";
    angular.module('interests')
    .controller('UserController', function (UserService, $location, $routeParams, $scope) {

       var user = this;

       user.items = UserService.getUserBucket();

       UserService.getSingleItem($routeParams.userId).success(function(data) {
         console.log('supposed data ', data);
         user.singleItem = data;
         });

       user.addUserBucket = function (item) {
           UserService.addUserBucket(item);
        //    $location.path('/userBucket');

           console.log(user);
           console.log("this user add works");
       };

       user.removeUserBucket = function (item) {
           UserService.removeuserBucket(item);
       };

       user.goToBucket = function(id){
        $location.path('/users/' + id);
        console.log(id)
       }

    });

})();
