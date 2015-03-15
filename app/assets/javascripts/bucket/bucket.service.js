(function () {
  "use strict";
  angular.module('charlestonBucketList')
    .factory('BucketService', function(_) {

        var url = 'http://tiy-fee-rest.herokuapp.com/collections/dummyserver';

        var bucket = [];

        var addBucketInterest=function (newBucketInterest) {
            bucket.push(newBucketInterest);
        };
        var getBucketInterest= function () {
            return bucket;
        };
        var removeBucketInterest = function (item) {
            var index = bucket.indexOf(item);
            bucket.splice(index,1);
        };

        return {
            getBucketInterest: getBucketInterest,
            addBucketInterest: addBucketInterest,
            removeBucketInterest: removeBucketInterest,
        };
    });

    .factory('InterestService', function(_) {

        var postInterest = function (newInterest) {
        $http.post(url, newInterest).success(function(){

        })
        .error(function(){
          console.log('ERROR NewsService/postArticle');
        });
      };

      var getInterests = function () {
        return $http.get(url);
      };

      var getOneInterest = function (interestId) {
        return $http.get(url + '/' + interestId);
      };

      var deleteInterest = function (interestId) {
        $http.delete(url + '/' + interestId);
      };

      return {
        postInterest: postInterest,
        getInterests: getInterests,
        getOneInterest: getOneInterest,
        deleteInterest: deleteInterest,
      };

    });

    })


})();
