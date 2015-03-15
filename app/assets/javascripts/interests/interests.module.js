(function () {
  "use strict";

  angular.module('interests', [
    'ngRoute',
  ])

  .config(function ($routeProvider) {
    $routeProvider
    .when('/interests', {
      templateUrl: 'interests/views/interests.html',
      controller: 'InterestController as interestCtrl'
    })

    .when('/interestDetail', {
      templateUrl: '/interests/views/interestDetail.html',
      controller: 'InterestController as interestCtrl'
    })

    .when('/bucketlistitem', {
       templateUrl: '/interests/views/bucketlistitem.html',
       controller: 'InterestController as interestCtrl'
    })

    .when('/addInterest', {
       templateUrl: '/interests/views/addInterest.html',
       controller: 'InterestController as interestCtrl'
    })

    .when('/userBucketDetail', {
       templateUrl: '/interests/views/userBucketDetail.html',
       controller: 'DetailController as bucketDtl',
   })

   .when('/userBucket', {
      templateUrl: '/interests/views/userBucket.html',
      controller: 'UserController as user',
  });
})

    .constant('_', _);

})();
