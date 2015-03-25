(function () {
    "use strict";
    angular.module('testApp')

    .controller('MainController', ['Auth', '$rootScope', function (Auth, $rootScope) { //scope is going out, so best not to use//
        var mainCtrl = this;
      Auth.currentUser().then(function(user) {
        console.log(user);
        $rootScope.currentUser = user
      });

    }])
})();
