var React = require('react');

var PhotoStore = require('../../stores/photo_store');
var MarkerStore = require('../../stores/marker_store');
var PhotoActions = require('../../actions/photo_actions');
var hashHistory = require('react-router').hashHistory;

var _markers = [];
/* global google */
var DiscoverMap = React.createClass({
  getInitialState: function() {
    return {center: {lat: 37.774929, lng: -122.419416}};
  },

  __onChange: function() {
    MarkerStore.resetMarkers();
    MarkerStore.setMapOnMarkers(this.map);
    console.log("Drag event occurs");
  },

  componentDidMount: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: this.state.center,
      zoom: 10
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.dragListener = this.map.addListener('idle', this.refetchWhenDragged);
    this.clickListener = this.map.addListener('click', this.mapClickHandle);
    PhotoStore.addListener(this.__onChange);

    var self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var centerLat = position.coords.latitude;
      var centerLng = position.coords.longitude;
      self.map.panTo({lat: centerLat, lng: centerLng});
    });
  },

  componentWillUnmount: function() {
    this.dragListener.remove();
    this.clickListener.remove();
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
      <div className="discover-map" ref="map"></div>
    );
  }
});

module.exports = DiscoverMap;
