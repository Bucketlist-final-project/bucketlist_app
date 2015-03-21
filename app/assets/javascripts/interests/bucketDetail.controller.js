(function () {
    "use strict";
    angular.module('interests')
    .controller('DetailController', function (DetailService, $location, $routeParams, $scope, uiGmapGoogleMapApi) {

       var bucketDtl = this;

       var longitude = '';

       var latitude = '';

       bucketDtl.items = DetailService.getBucketDetail();

       DetailService.getSingleDetail($routeParams.bucketId).success(function(data) {
           console.log('supposed data ', data);
           bucketDtl.singleItem = data;

           longitude= bucketDtl.singleItem.longitude
           bucketDtl.executeMap(longitude);

           latitude= bucketDtl.singleItem.latitude
           bucketDtl.executeMap(latitude);
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

       bucketDtl.executeMap = function(longitude){
       console.log('this is the data' + longitude);


       $scope.map = {
           center: {
               latitude: bucketDtl.singleItem.latitude,
               longitude: bucketDtl.singleItem.longitude
           },

           zoom: 12
       }

       $scope.marker= {
           id: 0,
           coords: {
               latitude: bucketDtl.singleItem.latitude,
               longitude: bucketDtl.singleItem.longitude

           }
      }


    };


    });

})();
