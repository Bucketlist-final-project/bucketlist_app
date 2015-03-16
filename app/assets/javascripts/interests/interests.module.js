(function () {
  "use strict";

  angular.module('interests', [
    'ngRoute',
  ])

  .config(function ($routeProvider) {
    $routeProvider
    .when('/interests', {
      templateUrl: 'assets/interests/views/interests.html',
      controller: 'InterestController as interestCtrl'
    })

    .when('/interestDetail', {
      templateUrl: 'assets/interests/views/interestDetail.html',
      controller: 'InterestController as interestCtrl'
    })

    .when('/bucketlistitem', {
       templateUrl: 'assets/interests/views/bucketlistItem.html',
       controller: 'InterestController as interestCtrl'
    })

    .when('/addInterest', {
       templateUrl: 'assets/interests/views/addInterest.html',
       controller: 'InterestController as interestCtrl'
    })

    .when('/bucketDetail', {
       templateUrl: 'assets/interests/views/bucketDetail.html',
       controller: 'DetailController as bucketDtl',
   })

   .when('/userBucket', {
      templateUrl: 'assets/interests/views/userBucket.html',
      controller: 'UserController as user',
  });
})

})();
