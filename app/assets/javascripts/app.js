(function () {
  "use strict";

  angular.module('testApp', [
    'ngRoute',
    'interests',
    'Devise',
    'uiGmapgoogle-maps'
  ])
   .config(['$httpProvider', function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   }])
   .config(['$routeProvider', function ($routeProvider) {
     $routeProvider
      .when('/', {
       templateUrl: 'assets/views/main.html',
       controller: 'MainController as mainCtrl'
   })
    }]);
})();
