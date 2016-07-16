const CommentApiUtil = {

  fetchComments: function(photoId, successCallback, errorCallback) {
    $.ajax({
      url: "/api/photos/" + photoId + "/comments",
      method: "GET",
      success: successCallback,
      error: errorCallback
    });
  },

  postComment: function(comment, successCallback, errorCallback) {
    $.ajax({
      url: "/api/comments",
      method: "POST",
      data: {comment: comment},
      success: successCallback,
      error: errorCallback
    });
  },

  deleteComment: function(commentId, successCallback, errorCallback) {
    $.ajax({
      url: "/api/comments/" + commentId,
      method: "DELETE",
      success: successCallback,
      error: errorCallback
    });
  }

};

module.exports = CommentApiUtil;
