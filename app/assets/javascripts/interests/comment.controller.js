(function () {
   "use strict";
   angular.module('interests')
   .controller('CommentController', ['CommentService', '$location', '$routeParams', '$rootScope', 'Auth', function (CommentService, $location, $routeParams, $rootScope, Auth) {

      var commentCtrl = this;

      $rootScope.newComment = true

      Auth.currentUser().then(function(user) {
      $rootScope.currentUser = user
      });

      CommentService.getOneItem($routeParams.bucketId).success(function(data){
        commentCtrl.getOneItem = data;
      });

      commentCtrl.submitComment = function (bucketListItem, userComment) {
        if($rootScope.newComment){
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
          var commentId = $rootScope.currentCommentId
          commentHash.bucket_list_item_id = bucketListItem;
          commentHash.comment = {};
          commentHash.comment.content = userComment.content;
          commentHash.user_id = $rootScope.currentUser.id;
          CommentService.editComment(commentHash, bucketListItem, userComment, commentId);
          $rootScope.newComment = true
          commentCtrl.content = '';
        }
    };

      commentCtrl.editComment = function(comment){
        $rootScope.commentCtrl.content = comment.content
        $rootScope.newComment = false
        $rootScope.currentCommentId = comment.id
       };

       commentCtrl.deleteComment = function(bucketListItem, userComment){
          console.log(userComment)
          CommentService.deleteComment(bucketListItem, userComment);
       };


 }]);

})();
