var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoStore = require('../stores/photo_store');
var PhotoApiUtil = require('../util/photo_api_util');

var PhotoConstants = require('../constants/photo_constants.js');

var PhotoActions = {
  // ClientActions: API Request ========================================
  fetchSinglePhoto: function(id) {
    PhotoApiUtil.fetchSinglePhoto(id, this.receivePhoto, this.handleError);
  },

  // ServerActions: Success Handlers ===================================
  receivePhoto: function(photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE,
      photo: photo
    });
  },

  handleError: function(response) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ERROR,
      errors: response.error()
    });
  },


};

module.exports = PhotoActions;
