const Dispatcher = require('../dispatcher/dispatcher');
const CommentStore = require('../stores/comment-store');
const CommentApiUtil = require('../util/comment-api-util');
const CommentConstants = require('../constants/comment-constants.js');

const CommentActions = {
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
    Dispatcher.dispatch({
      actionType: CommentConstants.RECEIVE,
      comments: comments
    });
  },

  // ServerActions: Error Handler ======================================
  handleError: function(response) {
    Dispatcher.dispatch({
      actionType: CommentConstants.ERROR,
      errors: response.error()
    });
  }

};

module.exports = CommentActions;
