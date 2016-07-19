const React = require('react');
const DiscoverMap = require('./discover-map');
const PhotoGrid = require('./photo-grid');
const LocationSuggestion = require('./location-suggestion');
const LocationConstants = require('../../constants/location-constants');

const DiscoverIndex = React.createClass({
  render: function() {
    return (
      <div className="home-content-container">
        <DiscoverMap/>
        <LocationSuggestion/>
        <PhotoGrid/>
      </div>
    );
  }
});

module.exports = DiscoverIndex;
