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
        // var comment = {};
        // comment.content = userComment;
        // comment.id = userId
        // console.log(comment);
        // bucketListItem.comments.push(comment);
        $http.patch('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments/' + commentId + '.json', userCommentHash).success(function(data){
        });
        console.log('in editComment')
      };

       return {
           getOneItem: getOneItem,
           postComment: postComment,
           editComment: editComment
       };

   });


})();
