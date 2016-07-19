const React = require('react');
const LocationActions = require('../../actions/location-actions');
/* global google */
const LocationSearch = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    let DOMNode = this.refs.autocomplete;
    this.initAutocomplete(DOMNode);
  },

  initAutocomplete(node) {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    this.autocomplete = new google.maps.places.Autocomplete(node, {types: ['geocode']});
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  },

  fillInAddress() {
    // Get the place details from the autocomplete object.
    let place = this.autocomplete.getPlace();
    let location = place.geometry.location;
    LocationActions.submitLocation({lat: location.lat(), lng: location.lng()});
  },

  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        this.autocomplete.setBounds(circle.getBounds());
      });
    }
  },

  render() {
    return (
      <div id="locationField">
        <input id="autocomplete"
          placeholder="Explore photography around the world"
          onFocus={this.geolocate} type="text"
          ref="autocomplete">
        </input>
      </div>
    );
  }

});

module.exports = LocationSearch;
