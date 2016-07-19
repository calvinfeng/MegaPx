const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const LocationConstants = require('../constants/location-constants');

let _location;
const LocationStore = new Store(Dispatcher);
LocationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case LocationConstants.RECEIVE:
      LocationStore.setLocation(payload.location);
      LocationStore.__emitChange();
    break;
  }
};

LocationStore.setLocation = function(location) {
  _location = location;
};

LocationStore.locationCoor = function() {
  return _location;
};

module.exports = LocationStore;
