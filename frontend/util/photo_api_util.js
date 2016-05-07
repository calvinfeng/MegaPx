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
  },

  fetchCurrentUserPhotos: function( successCallback, errorCallback) {
    $.ajax({
      url: "/api/user/photos",
      method: "GET",
      success: successCallback,
      error: errorCallback
    });
  },

  fetchPhotosWithinBounds: function(bounds, successCallback, errorCallback) {
    $.ajax({
      method: "GET",
      url: "api/photos",
      data: bounds,
      success: successCallback,
      error: errorCallback
    });
  },

  postPhoto: function(photo, successCallback, errorCallback) {
    $.ajax({
      method: "POST",
      url: "api/photos",
      data: photo,
      success: successCallback,
      error: errorCallback
    });
  },

  deletePhoto: function(photoId, successCallback, errorCallback) {
    $.ajax({
      method: "DELETE",
      url: "api/photos/" + photoId,
      success: successCallback,
      error: errorCallback
    });
  }
};

module.exports = PhotoApiUtil;
