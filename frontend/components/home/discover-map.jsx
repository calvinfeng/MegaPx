const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../../actions/photo-actions');
const PhotoStore = require('../../stores/photo-store');
const LocationStore = require('../../stores/location-store');
const MarkerStore = require('../../stores/marker-store');
const LocationConstants = require('../../constants/location-constants');
// Marker is never re-assigned, therefore, it's a const
const _markers = [];
/* global google */
const DiscoverMap = React.createClass({

  getInitialState: function() {
    return {center: {lat: 37.774929, lng: -122.419416}};
  },

  __onPhotoChange: function() {
    MarkerStore.resetMarkers(this.map);
  },

  __onLocationChange: function() {
    this.map.panTo(LocationStore.locationCoor());
  },

  componentDidMount: function() {
    let mapDOMNode = this.refs.map;
    let mapOptions = {
      center: this.state.center,
      zoom: 11
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.dragListener = this.map.addListener('idle', this.refetchWhenDragged);
    this.photoStoreListener = PhotoStore.addListener(this.__onPhotoChange);
    this.locationStoreListener = LocationStore.addListener(this.__onLocationChange);

    navigator.geolocation.getCurrentPosition((position) => {
      let centerLat = position.coords.latitude;
      let centerLng = position.coords.longitude;
      this.map.panTo({lat: centerLat, lng: centerLng});
    });
  },

  componentWillUnmount: function() {
    this.dragListener.remove();
    this.photoStoreListener.remove();
    this.locationStoreListener.remove();
  },

  mapPanTo: function(location) {
    this.map.panTo({lat: location.lat, lng: location.lng});
  },

  refetchWhenDragged: function() {
    let LatLngBounds = this.map.getBounds();

    let northEastBounds = {
      lat: LatLngBounds.getNorthEast().lat(),
      lng: LatLngBounds.getNorthEast().lng()
    };

    let southWestBounds = {
      lat: LatLngBounds.getSouthWest().lat(),
      lng: LatLngBounds.getSouthWest().lng()
    };

    let bounds = {
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
