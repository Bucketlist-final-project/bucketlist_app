(function () {
   "use strict";
   angular.module('interests')
   .controller('CommentController', ['CommentService', '$location', '$routeParams', '$scope', 'Auth', function (CommentService, $location, $routeParams, $scope, Auth) {

      var commentCtrl = this;

      $scope.newComment = true

      Auth.currentUser().then(function(user) {
      $scope.currentUser = user
      });

      CommentService.getOneItem($routeParams.bucketId).success(function(data){
        commentCtrl.getOneItem = data;
      });

      commentCtrl.submitComment = function (bucketListItem, userComment) {
        if($scope.newComment){
        var commentHash = {};
        commentHash.bucket_list_item_id = bucketListItem;
        commentHash.comment = {};
        commentHash.comment.content = userComment.content;
        commentHash.user_id = $scope.currentUser.id;
        CommentService.postComment(commentHash, bucketListItem, userComment);
        commentCtrl.content = '';
      }
        else{
          var commentHash = {};
          var commentId = $scope.currentCommentId
          commentHash.bucket_list_item_id = bucketListItem;
          commentHash.comment = {};
          commentHash.comment.content = userComment.content;
          commentHash.user_id = $scope.currentUser.id;
          CommentService.editComment(commentHash, bucketListItem, userComment, commentId);
          $scope.newComment = true
          commentCtrl.content = '';
        }
    };

      commentCtrl.editComment = function(comment){
        $scope.commentCtrl.content = comment.content
        $scope.newComment = false
        $scope.currentCommentId = comment.id
       };

       commentCtrl.deleteComment = function(bucketListItem, userComment){
          console.log(userComment)
          CommentService.deleteComment(bucketListItem, userComment);
       };


 }]);

})();
