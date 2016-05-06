var AppDispatcher = require('../dispatcher/dispatcher');
var CommentStore = require('../stores/comment_store');
var CommentApiUtil = require('../util/comment_api_util');
var CommentConstants = require('../constants/comment_constants.js');

var CommentActions = {
  // ClientActions: API Request ========================================
  fetchCommentsForPhoto: function(photoId) {
    CommentApiUtil.fetchComments(photoId, this.receiveComments, this.handleError);
  },

  postComment: function(comment) {
    CommentApiUtil.postComment(comment, this.receiveComments, this.handleError);
  },

  deleteComment: function(commentId) {
    CommentApiUtil.deleteComment(commentId, this.receiveComments, this.handleError);
  },

  // ServerActions: Success Handlers ===================================
  receiveComments: function(comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.RECEIVE,
      comments: comments
    });
  },

  // ServerActions: Error Handler ======================================
  handleError: function(response) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.ERROR,
      errors: response.error()
    });
  }

};

module.exports = CommentActions;
