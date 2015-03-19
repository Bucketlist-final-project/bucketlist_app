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

       comment.addComment = function (bucketListItem, userComment) {
           
          console.log('this is the bucket object ' + bucketListItem.id)
          console.log('this is the users comment ' + userComment)
          console.log('this is the users id ' + $scope.currentUser.id )
          var commentHash = {};
          commentHash.bucket_list_item_id = bucketListItem;
          commentHash.comment = userComment;
          commentHash.user_id = $scope.currentUser;
          // params[:bucket_list_item]
          // params[:comment]
          // params[:currentUser]
           CommentService.postComment(commentHash);
           // $scope.newComment= {};


           // console.log(comment.content);
     };

  });

})();
