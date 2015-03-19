(function () {
  "use strict";
  angular.module('interests')
    .factory('CommentService', function($http) {

        var comment = [];

        var getOneComment = function (newcomment, id) {
            return $http.get('/bucket_list_items/' + id  + '/comments.json');
        };

        var postComment = function (userCommentHash) {
        //      if(commentsPushed){
            $http.post('/bucket_list_items/' + userCommentHash.bucket_list_item_id.id + '/comments.json', userCommentHash);
        //     }else{
        //     commentsPushed = [newComment];
        //     $http.post('/bucket_list_items/' + id  + '/comments.json', commentsPushed);
        //     console.log('postcomment');
            };
        // };

        var addComment=function (newComment, currentUser) {
            // user.push(newUserBucket);
            $http.post('/bucket_list_items/comments' + id  + '/comments.json').success(function() {
                console.log('addComment');
            });
        };

        return {
            getOneComment: getOneComment,
            postComment: postComment
        };

    });


})();
