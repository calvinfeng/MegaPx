const Dispatcher = require('../dispatcher/dispatcher');
const MarkerConstants = require('../constants/marker-constants');

const MarkerActions = {
  openModalOnPhoto: function(photoId) {
    Dispatcher.dispatch({
      actionType: MarkerConstants.OPEN_MODAL,
      photoId: photoId
    });
  }
};

module.exports = MarkerActions;
