(function () {
 "use strict";
 angular.module('interests')
   .factory('CommentService', function($http) {



       var getOneItem = function (id) {
           return $http.get('/bucket_list_items/' + id  + '.json');
       };

      var postComment = function (userCommentHash, bucketListItem, userComment) {
        //   if(commentsPushed){
        var comment = {};
        comment.content = userComment.content;
        console.log(comment);
        bucketListItem.comments.push(comment);
        $http.post('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments.json', userCommentHash).success(function(data){
        });
      };

      var editComment = function(userCommentHash, bucketListItem, userComment, commentId){
        var comment = {};
        comment.content = userComment.content;
        comment.id = commentId
        console.log(comment.id);
        var found_comment = _.findWhere(bucketListItem.comments, {id: parseInt(commentId)})
        found_comment.content = comment.content;
        $http.patch('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments/' + commentId + '.json', userCommentHash).success(function(data){
        });
        console.log('in editComment')
      };

      var deleteComment = function(userCommentHash, bucketListItem, userComment){
        console.log('userCommentId: ' + userComment.id)
        // $http.delete('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments/' + commentId + '.json', userCommentHash).success(function(){
        // });
      };

       return {
           getOneItem: getOneItem,
           postComment: postComment,
           editComment: editComment,
           deleteComment: deleteComment
       };

   });


})();
