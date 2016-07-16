const Dispatcher = require('../dispatcher/dispatcher');
const UserApiUtil = require('../util/user_api_util');
const UserConstants = require('../constants/user_constants');

const UserActions = {

  guestLogin: function() {
    //UserActions.login({username: "guest", password: "password"});
    UserActions.login({username: "calvin", password: "123456"});
  },

  // ClientActions: API Request ========================================
  fetchCurrentUser() {
    UserApiUtil.fetchCurrentUser(
      UserActions.receiveCurrentUser,
      function(){console.log("No user is currently signed in");}
    );
  },

  signup(user) {
    UserApiUtil.post({
      url: "/api/user",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  login(user) {
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  logout() {
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  },

  // ServerActions
  receiveCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser: function() {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  handleError: function(response) {
    Dispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: response.error()
    });
  }

};

module.exports = UserActions;
