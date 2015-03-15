(function () {
  "use strict";
  angular.module('interests')
  .factory('InterestService', function($http) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/dummytesting';

      var interest = [];

      var addNewInterest = function (interest) {
        $http.post(url, interest);
      };

      var getInterests = function () {
        return $http.get(url);
      };


      var getOneInterest = function (id) {
        return $http.get(url + '/' + id);
      };

      var deleteInterest = function (id) {
        $http.delete(url + '/' + id);
      };

      return {
        addNewInterest: addNewInterest,
        getInterests: getInterests,
        getOneInterest: getOneInterest,
        deleteInterest: deleteInterest,
      };

    });

})();
