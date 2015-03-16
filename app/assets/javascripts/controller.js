(function () {
    "use strict";
    angular.module('testApp')

    .controller('MainController', function (Auth, $scope) { //scope is going out, so best not to use//
        var mainCtrl = this;
      Auth.currentUser().then(function(user) {
        console.log(user);
        $scope.currentUser = user
      });

    })
})();
