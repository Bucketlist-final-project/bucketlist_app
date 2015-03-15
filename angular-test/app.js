(function () {
  "use strict";

  angular.module('testApp', [
    'ngRoute',
    'interests'


  ])

   .config(function ($routeProvider) {
     $routeProvider
     .when('/', {
       templateUrl: 'views/main.html',
       controller: 'MainController as mainCtrl'
   })

    });
})();
