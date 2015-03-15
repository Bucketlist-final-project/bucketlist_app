var charlestonBucketList = angular.module('charlestonBucketList', ['ngRoute'])
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
    }])

   .config(function($routeProvider){
     $routeProvider
     .when('/', {
       templateUrl: 'assets/main/views/main.html',
       controller: 'MainController as mainCtrl'
     })
     

    });

      // .constant('_', _)
