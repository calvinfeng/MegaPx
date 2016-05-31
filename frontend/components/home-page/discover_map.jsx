var React = require('react');

var PhotoStore = require('../../stores/photo_store');
var MarkerStore = require('../../stores/marker_store');
var PhotoActions = require('../../actions/photo_actions');

var hashHistory = require('react-router').hashHistory;
var LocationConstants = require('../../constants/location_constants');

var _markers = [];
/* global google */
var DiscoverMap = React.createClass({
  getInitialState: function() {
    return {center: {lat: 37.774929, lng: -122.419416}};
  },

  __onChange: function() {
    MarkerStore.resetMarkers(this.map);
  },

  componentDidMount: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: this.state.center,
      zoom: 11
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.dragListener = this.map.addListener('idle', this.refetchWhenDragged);
    this.storeListener = PhotoStore.addListener(this.__onChange);

    var self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var centerLat = position.coords.latitude;
      var centerLng = position.coords.longitude;
      self.map.panTo({lat: centerLat, lng: centerLng});
    });
  },

  componentWillUnmount: function() {
    this.dragListener.remove();
    this.storeListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.suggestedLocation) {
      this.mapPanTo(LocationConstants[nextProps.suggestedLocation]);
    }
  },

  mapPanTo: function(location) {
    this.map.panTo({lat: location.lat, lng: location.lng});
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
      <div className="discover-map-container">
        <div className="discover-map" ref="map"></div>
      </div>
    );
  }
});

module.exports = DiscoverMap;
