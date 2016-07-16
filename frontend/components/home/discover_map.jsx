const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo_store');
const MarkerStore = require('../../stores/marker_store');
const LocationConstants = require('../../constants/location_constants');

// Marker is never re-assigned, therefore, it's a const
const _markers = [];
/* global google */
const DiscoverMap = React.createClass({
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

    navigator.geolocation.getCurrentPosition((position) => {
      var centerLat = position.coords.latitude;
      var centerLng = position.coords.longitude;
      this.map.panTo({lat: centerLat, lng: centerLng});
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
