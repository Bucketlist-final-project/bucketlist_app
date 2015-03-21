(function () {
   "use strict";
   angular.module('interests')
   .controller('CommentController', function (CommentService, $location, $routeParams, $scope, Auth) {

      var commentCtrl = this;
      
      $scope.newComment = true

      Auth.currentUser().then(function(user) {
      $scope.currentUser = user
      });

      CommentService.getOneItem($routeParams.bucketId).success(function(data){
        commentCtrl.getOneItem = data;
      });

      commentCtrl.addComment = function (bucketListItem, userComment) {
        var commentHash = {};
        commentHash.bucket_list_item_id = bucketListItem;
        commentHash.comment = {};
        commentHash.comment.content = userComment;
        commentHash.user_id = $scope.currentUser.id;
        CommentService.postComment(commentHash, bucketListItem, userComment);
        commentCtrl.content = '';
    };

      commentCtrl.editComment = function(comment){
        $scope.commentCtrl.content = comment.content
        $scope.newComment = false
       }


 });

})();
