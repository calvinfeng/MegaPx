var React = require('react');
var DiscoverMap = require('./discover_map');
var PhotoGrid = require('./photo_grid');
var LocationConstants = require('../../constants/location_constants');

var DiscoverIndex = React.createClass({

  getInitialState: function() {
    return {selectedSuggestion: undefined};
  },

  clickHandler: function(event) {
    this.setState({selectedSuggestion: event.currentTarget.value});
  },

  generatePopularLocations: function() {
    var self = this;
    return (
      Object.keys(LocationConstants).map(function(key){
        return (
          <div className="location-item"
            title="This is a popular location, click to go"
            value={key} onClick={self.clickHandler}>
            {LocationConstants[key].name}
          </div>
        );
      })
    );
  },

  componentDidMount: function() {
    $('.discover-map').css('visibility', 'hidden');
  },

  render: function() {
    console.log("DiscoverIndex component is rendering");
    return (
      <div className="home-content-container">
        <div className="discover-suggestion-bar">
          {this.generatePopularLocations()}
        </div>
        <DiscoverMap suggestedLocation={this.state.selectedSuggestion}/>
        <PhotoGrid/>
      </div>
    );
  }
});

module.exports = DiscoverIndex;
