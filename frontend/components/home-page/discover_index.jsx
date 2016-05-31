var React = require('react');
var DiscoverMap = require('./discover_map');
var PhotoGrid = require('./photo_grid');
var LocationConstants = require('../../constants/location_constants');

var DiscoverIndex = React.createClass({

  getInitialState: function() {
    return {selectedSuggestion: undefined, isChangingLocation: false};
  },

  componentDidMount: function() {
    // $('.discover-map-container').css("display","none");
    // $('.discover-map').css("visibility","hidden");
  },

  clickHandler: function(event) {
    this.setState({selectedSuggestion: event.currentTarget.value, isChangingLocation: true});
  },

  generatePopularLocations: function() {
    var self = this;
    return (
      Object.keys(LocationConstants).map(function(key){
        return (
          <div className="location-item"
            title="This is a popular location, click to go"
            key={key} value={key} onClick={self.clickHandler}>
            {LocationConstants[key].name}
          </div>
        );
      })
    );
  },

  render: function() {
    return (
      <div className="home-content-container">
        <DiscoverMap suggestedLocation={this.state.selectedSuggestion}/>
        <div className="discover-suggestion-bar">
          {this.generatePopularLocations()}
        </div>
        <PhotoGrid isChangingLocation={this.state.isChangingLocation}/>
      </div>
    );
  }
});

module.exports = DiscoverIndex;
