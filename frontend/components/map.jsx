var React = require('react');

var PhotoStore = require('../stores/photo_store');
var MarkerStore = require('../stores/marker_store');
var PhotoActions = require('../actions/photo_actions');
var hashHistory = require('react-router').hashHistory;

var _markers = [];
/* global google */
var Map = React.createClass({
  getInitialState: function() {
    return {center: {lat: 37.774929, lng: -122.419416}};
  },

  __onChange: function() {
    // var locations;
    // MarkerStore.resetMarkers();
    // MarkerStore.setMapOnMarkers(this.map);
    console.log(PhotoStore.inventory());
  },

  componentDidMount: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: this.state.center,
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.refetchWhenDragged);
    this.map.addListener('click', this.mapClickHandle);
    PhotoStore.addListener(this.__onChange);

    var self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var centerLat = position.coords.latitude;
      var centerLng = position.coords.longitude;
      self.map.panTo({lat: centerLat, lng: centerLng});
    });
  },

  mapClickHandle: function(e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    console.log(lat, lng);
    // hashHistory.push({
    //   pathname: "photos/new",
    //   query: {lat: lat, lng: lng}
    // });
  },

  refetchWhenDragged: function() {
    var LatLngBounds = this.map.getBounds();

    var northEastBounds = {
      lat: LatLngBounds.getNorthEast().lat(),
      lng: LatLngBounds.getNorthEast().lng()
    };

    var southWestBounds = {
      lat: LatLngBounds.getSouthWest().lat(),
      lng: LatLngBounds.getSouthWest().lng()
    };

    var bounds = {
      "northEast": northEastBounds,
      "southWest": southWestBounds
    };

    PhotoActions.fetchPhotosWithinBounds({bounds: bounds});
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
