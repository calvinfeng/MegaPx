const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const PhotoStore = require('./photo_store');
const MarkerActions = require('../actions/marker_actions');
const MarkerConstants = require('../constants/marker_constants');

let _markers = [];
let _selectedPhoto;

/* global google */
const MarkerStore = new Store(Dispatcher);
MarkerStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case MarkerConstants.OPEN_MODAL:
      let photos = PhotoStore.inventory();
      for (let i = 0; i < photos.length; i++) {
        if (photos[i].id === payload.photoId) {
          _selectedPhoto = photos[i];
          MarkerStore.__emitChange();
          break;
        }
      }
    break;
  }
};

MarkerStore.markers = function() {
  return _markers.slice();
};

MarkerStore.selectedPhoto = function() {
  return _selectedPhoto;
};

MarkerStore.resetMarkers = function(map) {
  this.deleteMarkers();
  let photos = PhotoStore.inventory();
  if (photos) {
    for (let i = 0; i < photos.length; i++) {
      this.addMarker(photos[i], map);
    }
  }
};

MarkerStore.addMarker = function(photo, map) {
  let marker = new google.maps.Marker({
    position: { lat: photo.lat, lng: photo.lng },
    title: photo.title
  });
  marker.setMap(map);

  let infoWindow = new google.maps.InfoWindow();
  infoWindow.setContent('<h3>' + photo.title + '</h3><img height="' +
  $(window).height()*0.20 +  '" src="' + photo.url.slice(0,47) + 'c_scale,h_200' +
  photo.url.slice(46) + '"></img><p>by ' + photo.photographer.first_name +
  ' ' + photo.photographer.last_name + '</p>');

  marker.addListener('click', function(){
    MarkerActions.openModalOnPhoto(photo.id);
  });

  marker.addListener('mouseover', function(){
    infoWindow.open(map, marker);
  });

  marker.addListener('mouseout', function() {
    infoWindow.close();
  });

  _markers.push(marker);
};

MarkerStore.deleteMarkers = function() {
  this.clearMarkers();
  _markers = [];
};

MarkerStore.clearMarkers = function() {
  for (let i = 0; i < _markers.length; i++) {
    _markers[i].setMap(null);
  }
};

module.exports = MarkerStore;
