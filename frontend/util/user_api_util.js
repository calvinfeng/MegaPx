const UserApiUtil = {
  post: function(options) {
    $.ajax({
      url: options.url,
      type: "POST",
      data: {user: options.user},
      success: options.success,
      error: options.error
    });
  },

  logout: function(success, error) {
    $.ajax({
      url: "/api/session",
      method: "DELETE",
      success: success,
      error: error
    });
  },

  fetchCurrentUser: function(success) {
    $.ajax({
      url: "/api/session",
      method: "GET",
      success: success,
      error: function() {
        console.log("No user is currently signed in");
      }
    });
  }
};

module.exports = UserApiUtil;
