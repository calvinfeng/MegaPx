var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
/* global google */
var Store = require('flux/utils').Store;
var PhotoStore = require('./photo_store');

var _markers = [];
var MarkerStore = new Store(AppDispatcher);

MarkerStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTO_SELECTED:
    _markers[payload.benchIndex].setAnimation(google.maps.Animation.BOUNCE);
    break;
    case PhotoConstants.PHOTO_DESELECTED:
    _markers[payload.benchIndex].setAnimation(null);
    break;
  }
};

MarkerStore.all = function() {
  return _markers.slice();
};

MarkerStore.resetMarkers = function() {
  var locations;
  this.deleteMarkers();
  locations = PhotoStore.all();
  for (var i = 0; i < locations.length; i++) {
    this.addMarker(locations[i]);
  }
};

MarkerStore.setMapOnMarkers = function(map) {
  for (var i = 0; i < _markers.length; i++) {
    _markers[i].setMap(map);
  }
};

MarkerStore.addMarker = function(position) {
  var marker = new google.maps.Marker({
    position: { lat: position.lat, lng: position.lng },
    map: this.map,
    title: position.description
  });
  _markers.push(marker);
};

MarkerStore.deleteMarkers = function() {
  this.clearMarkers();
  _markers = [];
};

MarkerStore.clearMarkers = function() {
  this.setMapOnMarkers(null);
};
