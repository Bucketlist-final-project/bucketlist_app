(function () {
  "use strict";

  angular.module('charlestonBucketList', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'assets/main/views/main.html',
        controller: 'MainController as mainCtrl'
      })
    .when('/userBucket', {
       templateUrl: 'assets/bucket/views/userBucket.html',
       controller: 'BucketController as bucket'
    })

})
// .constant('_', _)


})();
