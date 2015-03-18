(function () {
    "use strict";
    angular.module('interests')
    .controller('CommentController', function (CommentService, $location, $routeParams, $scope, Auth) {

       var comment = this;

       Auth.currentUser().then(function(user) {
       $scope.currentUser = user
       });

         CommentService.getOneComment($routeParams.bucketId).success(function(data){
         console.log('hellloooo');
         comment.getOneComment = data;
     });

       comment.addComment = function (commentsPushed, newComment) {
           CommentService.postComment(commentsPushed, newComment);
           $scope.newComment= {};


           console.log('this works add comment');
     };

 });

})();
