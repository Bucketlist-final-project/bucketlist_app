(function () {
    "use strict";
    angular.module('charlestonBucketList')
    .controller('BucketController', function (BucketService) {

       var bucket = this;

       bucket.addBucketInterest = function (item) {
           BucketService.addBucketInterest(item);
       };
       bucket.removeBucketInterest = function (item) {
           BucketService.removeBucketInterest(item);
       };

    });

    .controller('InterestController', function (InterestService) {

    var interestCtrl = this;

    interesrCtrl.addInterest = function(newInterest){
      InterestService.postInterest(newInterest);
      $scope.newInterest = {};
    };

    InterestService.getInterests().success(function(data){
      interestCtrl.getInterests = data;
    })
    .error(function(){
      console.log('interestCtrl.getInterests error')
    });

    InterestsService.getOneInterest($stateParams.interestId).success(function(data){
    interestCtrl.getOneInterest = data;
    })
    .error(function(){
      console.log('ERROR interestCtrl.getOneInterest')
    });

    interestCtrl.routeTo = function (path) {
      $location.path(path);
    };

    interestCtrl.deleteInterest = function (interestId) {
      InterestService.deleteInterest(interestId);
    };

});
        
})();
