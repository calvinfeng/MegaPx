var AppDispatcher = require('../dispatcher/dispatcher');
var MarkerConstants = require('../constants/marker_constants');

var MarkerActions = {
  openModalOnPhoto: function(photoId) {
    AppDispatcher.dispatch({
      actionType: MarkerConstants.OPEN_MODAL,
      photoId: photoId
    });
  }
};

module.exports = MarkerActions;
