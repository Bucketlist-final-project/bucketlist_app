(function () {
   "use strict";
   angular.module('interests')
   .controller('CommentController', ['CommentService', '$location', '$routeParams', '$scope', '$rootScope', 'Auth', function (CommentService, $location, $routeParams, $scope, $rootScope, Auth) {

      var commentCtrl = this;

      commentCtrl.newComment = true

      Auth.currentUser().then(function(user) {
      $rootScope.currentUser = user
      });

      CommentService.getOneItem($routeParams.bucketId).success(function(data){
        commentCtrl.getOneItem = data;
      });

      commentCtrl.submitComment = function (bucketListItem, userComment) {
        if(commentCtrl.newComment){
        var commentHash = {};
        commentHash.bucket_list_item_id = bucketListItem;
        commentHash.comment = {};
        commentHash.comment.content = userComment.content;
        commentHash.user_id = $rootScope.currentUser.id;
        CommentService.postComment(commentHash, bucketListItem, userComment);
        commentCtrl.content = '';
      }
        else{
          var commentHash = {};
          var commentId = commentCtrl.currentCommentId
          commentHash.bucket_list_item_id = bucketListItem;
          commentHash.comment = {};
          commentHash.comment.content = userComment.content;
          commentHash.user_id = $rootScope.currentUser.id;
          CommentService.editComment(commentHash, bucketListItem, userComment, commentId);
          commentCtrl.newComment = true
          commentCtrl.content = '';
        }
    };

      commentCtrl.editComment = function(comment){
       commentCtrl.content = comment.content
        commentCtrl.newComment = false
        commentCtrl.currentCommentId = comment.id
       };

       commentCtrl.deleteComment = function(bucketListItem, userComment){
          console.log(userComment)
          CommentService.deleteComment(bucketListItem, userComment);
       };


 }]);

})();
