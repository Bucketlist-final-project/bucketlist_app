(function () {
  "use strict";

  angular.module('charlestonBucketList', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: 'app/assets/javascripts/main.html',
       controller: 'MainController as mainCtrl'
    })
    .when('/userBucket', {
       templateUrl: 'app/assets/javascripts/bucket/userBucket.html',
       controller: 'CartController as cart'
    })

})
.constant('_', _)
})();
