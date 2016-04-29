var PhotoApiUtil = {
  
  fetchSinglePhoto: function(id, successCallback, errorCallback) {
    $.ajax({
      url: "/api/photos/" + id,
      method: "GET",
      success: successCallback,
      error: errorCallback
    });
  },

  fetchAllPhotos: function(successCallback, errorCallback) {
    $.ajax({
      url: "/api/photos",
      method: "GET",
      success: successCallback,
      error: errorCallback
    });
  }

};

module.exports = PhotoApiUtil;
