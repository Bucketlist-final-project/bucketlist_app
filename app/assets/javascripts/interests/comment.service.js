(function () {
 "use strict";
 angular.module('interests')
   .factory('CommentService', function($http) {



       var getOneItem = function (id) {
           return $http.get('/bucket_list_items/' + id  + '.json');
       };

       var postComment = function (userCommentHash) {
        //   if(commentsPushed){
           $http.post('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments.json', userCommentHash).success(function(data){
           });
        //    }else{
        //    commentsPushed = [newComment];
        //    $http.post('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id  + '/comments.json', commentsPushed);
        //    console.log('postcomment');
        //    };
        };


       return {
           getOneItem: getOneItem,
           postComment: postComment
       };

   });


})();
