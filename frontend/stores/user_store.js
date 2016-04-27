var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);
var HashHistory = require('react-router').hashHistory;

var _currentUser, _errors;

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "LOGIN":
    UserStore.login(payload.user);
    break;
    case "LOGOUT":
    UserStore.logout(payload.user);
    break;
    case "ERROR":
    UserStore.setErrors(payload.errors);
    break;
  }
  UserStore.__emitChange();
};

UserStore.setErrors = function(errors) {
  _errors = errors;
};

UserStore.login = function(user) {
  _currentUser = user;
  _errors = null;
  HashHistory.push({pathname: "/"});
};

UserStore.logout = function() {
  _currentUser = null;
  _errors = null;
};

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
