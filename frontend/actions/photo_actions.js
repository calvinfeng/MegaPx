var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoStore = require('../stores/photo_store');
var PhotoApiUtil = require('../util/photo_api_util');

var PhotoConstants = require('../constants/photo_constants.js');

var PhotoActions = {
  // ClientActions: API Request ========================================
  fetchSinglePhoto: function(id) {
    PhotoApiUtil.fetchSinglePhoto(id, this.receiveOnePhoto, this.handleError);
  },

  fetchPhotosWithinBounds: function(bounds) {
    PhotoApiUtil.fetchPhotosWithinBounds(bounds, this.receivePhotos, this.handleError);
  },

  fetchAllPhotos: function() {
    PhotoApiUtil.fetchAllPhotos(this.receivePhotos, this.handleError);
  },

  fetchCurrentUserPhotos: function() {
    PhotoApiUtil.fetchCurrentUserPhotos(this.receivePhotos, this.handleError);
  },

  postPhoto: function(photo) {
    PhotoApiUtil.postPhoto(photo, this.receiveOnePhoto, this.handleError);
  },

  // ServerActions: Success Handlers ===================================
  receiveOnePhoto: function(photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_ONE,
      photo: photo
    });
  },

  receivePhotos: function(photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE,
      photos: photos
    });
  },
  // ServerActions: Error Handler ======================================
  handleError: function(response) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ERROR,
      errors: response.error()
    });
  },


};

module.exports = PhotoActions;
