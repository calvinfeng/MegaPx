// Key Architecture
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
// Helper functions
var UserConstants = require('../constants/user_constants');

var UserActions = {

  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(response) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: response.error()
    });
  },

  removeCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser(
      UserActions.receiveCurrentUser,
      UserActions.handleError
    );
  },

  signup: function(user) {
    //since signup and login both use POST method, we will keep code dry
    UserApiUtil.post({
      url: "/api/user",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  login: function(user) {
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  logout: function() {
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  },

  guestLogin: function() {
    UserActions.login({username: "guest", password: "password"});
  }
};

module.exports = UserActions;
