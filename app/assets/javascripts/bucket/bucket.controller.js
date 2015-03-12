(function () {
    "use strict";
    angular.module('charlestonBucketList')
    .controller('BucketController', function (interestService) {

       var bucket = this;

       bucket.items = BucketService.getCartProducts();
       cart.total = 0;

       bucket.addBucketInterest = function (item) {
           BucketService.addBucketInterest(item);
       };
       bucket.removeBucketInterest = function (item) {
           BucketService.removeBucketInterest(item);
       };
    });
})();
