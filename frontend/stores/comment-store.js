const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment-constants');
let _comments, _errors;

const CommentStore = new Store(Dispatcher);
CommentStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CommentConstants.RECEIVE:
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case CommentConstants.DELETE:
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case CommentConstants.POST:
      CommentStore.setComments(payload.comments);
      CommentStore.__emitChange();
    break;

    case CommentConstants.ERROR:
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
