const Dispatcher = require('../dispatcher/dispatcher');
const PhotoStore = require('../stores/photo_store');
const PhotoApiUtil = require('../util/photo_api_util');
const PhotoConstants = require('../constants/photo_constants.js');

const PhotoActions = {
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

  deletePhoto: function(photoId) {
    PhotoApiUtil.deletePhoto(photoId, this.receivePhotos, this.handleError);
  },

  // ServerActions: Success Handlers ===================================
  receiveOnePhoto: function(photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_ONE,
      photo: photo
    });
  },

  receivePhotos: function(photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE,
      photos: photos
    });
  },

  // ServerActions: Error Handler ======================================
  handleError: function(response) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.ERROR,
      errors: response.error()
    });
  },
};

module.exports = PhotoActions;
