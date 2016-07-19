const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user-constants');

let _currentUser, _errors;

const UserStore = new Store(Dispatcher);
UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN:
      UserStore.login(payload.user);
      UserStore.__emitChange();
    break;

    case UserConstants.LOGOUT:
      UserStore.logout(payload.user);
      UserStore.__emitChange();
    break;

    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      UserStore.__emitChange();
    break;
  }
};

// Setter methods
UserStore.setErrors = function(errors) {
  _currentUser = null;
  _errors = errors;
};

UserStore.login = function(user) {
  window.user = user;
  _currentUser = user;
  _errors = null;
};

UserStore.logout = function() {
  window.user = null;
  _currentUser = null;
  _errors = null;
};

// Getter methods
UserStore.currentUser = function() {
  if (_currentUser) {
    return $.extend({}, _currentUser);
  } else {
    return null;
  }
};

UserStore.errors = function() {
  if (_errors) {
    return JSON.parse(_errors.responseText);
  }
};

module.exports = UserStore;
