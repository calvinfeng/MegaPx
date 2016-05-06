var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CommentStore = new Store(AppDispatcher);

var _comments, _errors;

CommentStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "COMMENTS RECEIVED":
      console.log("Comments loaded");
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case "COMMENT DELETED":
      console.log("Comment deleted");
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case "COMMENT CREATED":
      console.log("Comment created");
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case "COMMENT ERROR":
      console.log("Error in CommentStore");
      CommentStore.setErrors(payload.errors);
      CommentStore.__emitChange();
    break;
  }
};

CommentStore.setComments = function(comments) {
  _comments = comments;
};

CommentStore.setErrors = function(errors) {
  _errors = errors;
};

CommentStore.inventory = function() {
  return _comments.slice();
};

module.exports = CommentStore;
