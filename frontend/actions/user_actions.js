// Key Architecture
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
// Helper functions
var UserConstants = require('../constants/user_constants');

var UserActions = {
  
  // ClientActions: API Request ========================================
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser(
      UserActions.receiveCurrentUser,
      function(){console.log("No user is currently signed in");}
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

  // ServerActions: Success Handlers ===================================
  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  handleError: function(response) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: response.error()
    });
  },

  guestLogin: function() {
    UserActions.login({username: "guest", password: "password"});
  }

};

module.exports = UserActions;
