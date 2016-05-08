var AppDispatcher = require('../dispatcher/dispatcher');
/* global google */
var Store = require('flux/utils').Store;
var PhotoStore = require('./photo_store');
var MarkerActions = require('../actions/marker_actions');

var _markers = [];
var _selectedPhoto;
var MarkerStore = new Store(AppDispatcher);

MarkerStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "OPEN MODAL TRHOUGH MARKER":
      var photos = PhotoStore.inventory();
      for (var i = 0; i < photos.length; i++) {
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
  var photos;
  this.deleteMarkers();
  photos = PhotoStore.inventory();
  if (photos) {
    for (var i = 0; i < photos.length; i++) {
      this.addMarker(photos[i], map);
    }
  }
};

// MarkerStore.setMapOnMarkers = function(map) {
//   for (var i = 0; i < _markers.length; i++) {
//     _markers[i].setMap(map);
//   }
// };
// var contentString = "<div>Hello</div>";
// var infoWindow = new google.maps.InfoWindow({
//   content:contentString
// });
// _markers[i].addListener('mouseover', function(){
//   infoWindow.open(map, _markers[i]);
// });

MarkerStore.addMarker = function(photo, map) {
  var marker = new google.maps.Marker({
    position: { lat: photo.lat, lng: photo.lng },
    title: photo.title
  });
  marker.setMap(map);

  var infoWindow = new google.maps.InfoWindow();
  infoWindow.setContent('<img height="' +
  $(window).height()*0.20 +  '" src="' + photo.url.slice(0,47) + 'c_scale,h_200' +
  photo.url.slice(46) + '"></img>');

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
  for (var i = 0; i < _markers.length; i++) {
    _markers[i].setMap(null);
  }
};

module.exports = MarkerStore;
