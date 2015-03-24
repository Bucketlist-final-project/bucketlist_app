(function () {
 "use strict";
 angular.module('interests')
   .factory('CommentService', ['$http', function($http) {

       var getOneItem = function (id) {
           return $http.get('/bucket_list_items/' + id  + '.json');
       };

      var postComment = function (userCommentHash, bucketListItem, userComment) {
        $http.post('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments.json', userCommentHash).success(function(data){
          bucketListItem.comments.push(data);
        });
      };

      var editComment = function(userCommentHash, bucketListItem, userComment, commentId){
        var comment = {};
        comment.content = userComment.content;
        comment.id = commentId
        console.log(comment.id);
        var foundComment = _.findWhere(bucketListItem.comments, {id: parseInt(commentId)})
        foundComment.content = comment.content;
        $http.patch('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments/' + commentId + '.json', userCommentHash).success(function(data){
        });
        console.log('in editComment')
      };

      var deleteComment = function(bucketListItem, userComment){
        var deletedComment = _.findWhere(bucketListItem.comments, {id: parseInt(userComment.id)})
        bucketListItem.comments = _.without(bucketListItem.comments, deletedComment)


        $http.delete('/bucket_list_items/' + userComment.bucket_list_item_id + '/comments/' + userComment.id + '.json', userComment).success(function(){
        });
      };

       return {
           getOneItem: getOneItem,
           postComment: postComment,
           editComment: editComment,
           deleteComment: deleteComment
       };

   }]);


})();
