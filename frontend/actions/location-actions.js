const Dispatcher = require('../dispatcher/dispatcher');
const LocationConstants = require('../constants/location-constants.js');
const LocationStore = require('../stores/location-store');

const LocationActions = {
  submitLocation(location) {
    Dispatcher.dispatch({
      actionType: LocationConstants.RECEIVE,
      location: location
    });
  }
};

module.exports = LocationActions;
