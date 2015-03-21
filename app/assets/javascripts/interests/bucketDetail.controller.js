(function () {
    "use strict";
    angular.module('interests')
    .controller('DetailController', function (DetailService, $location, $routeParams, $scope, uiGmapGoogleMapApi) {

       var bucketDtl = this;

       uiGmapGoogleMapApi.then(function(maps){

       });

       $scope.map = {
           center: {
               latitude: 32.8433,
               longitude: -79.9333,
           },

               zoom: 12
       };

       bucketDtl.items = DetailService.getBucketDetail();

       DetailService.getSingleDetail($routeParams.bucketId).success(function(data) {
           bucketDtl.singleItem = data;
       });

       bucketDtl.addBucketDetail = function (item) {
           DetailService.addBucketDetail(item);
           $location.path('/userBucketDetail');
           console.log(bucketDtl);
       };

       bucketDtl.removeBucketDetail = function (item) {
           DetailService.removeBucketDetail(item);
       };

       bucketDtl.goToBucketDetail = function(id){
        $location.path('/bucket_list_items/' + id);
        console.log(id)
       };



    });

})();
