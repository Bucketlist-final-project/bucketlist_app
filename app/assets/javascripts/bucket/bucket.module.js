(function () {
  "use strict";

  angular.module('charlestonBucketList', [
    'ngRoute'
  ])

  .config(function ($routeProvider, $urlRouterProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'assets/main/views/main.html',
        controller: 'MainController as mainCtrl'
      })
    .when('/admin', {
      templateUrl: 'assets/bucket/views/admin.html',
      controller: 'BucketController as bucketCtrl'
    })
    .when('/interests', {
      templateurl: 'assets/bucket/views/interests.html',
      controller: 'InterestController as interestCtrl'
    })
    .when('/interestsAdd', {
      templateUrl: 'assets/bucket/views/interestsAdd.html',
      controller: 'InterestController as interestCtrl'
    })
    .when('/interestsDetail', {
      templateUrl: 'assets/bucket/views/interestsDetial.html',
      controller: 'InterestController as interestCtrl'
    })
    .when('/userBucket', {
       templateUrl: 'assets/bucket/views/userBucket.html',
       controller: 'BucketController as bucket'
    })
    .when('/userBucketDetail', {
      templateUrl: 'assets/bucket/views/userBucketDetail.html',
      controller: 'BucketController as bucketCtrl'
    })

})
// .constant('_', _)


})();
