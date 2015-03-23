(function () {
  "use strict";
  angular.module('interests')
  .factory('InterestService', function($http) {
      // var url = 'http://tiy-fee-rest.herokuapp.com/collections/dummytesting';

      var interest = [];

      var addNewInterest = function (newInterest) {
        $http.post('/bucket_list_item');
      };

      var getInterests = function () {
        return $http.get('/interests.json');
      };


      var getOneInterest = function (id) {
        return $http.get('/' + id);
      };

      var deleteInterest = function (id) {
        $http.delete('/' + id);
      };

      return {
        addNewInterest: addNewInterest,
        getInterests: getInterests,
        getOneInterest: getOneInterest,
        deleteInterest: deleteInterest,
      };

    });

})();
