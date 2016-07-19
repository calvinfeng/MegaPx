const React = require('react');
const DiscoverMap = require('./discover-map');
const PhotoGrid = require('./photo-grid');
const LocationConstants = require('../../constants/location-constants');

const DiscoverIndex = React.createClass({

  getInitialState() {
    return {selectedSuggestion: undefined, isChangingLocation: false};
  },

  clickHandler(event){
    this.setState({selectedSuggestion: event.currentTarget.value, isChangingLocation: true});
  },

  generatePopularLocations() {
    return (
      // ES6 Arrow function
      Object.keys(LocationConstants).map((key) => {

        return (
          <div className="location-item"
            title="This is a popular location, click to go"
            key={key} value={key} onClick={this.clickHandler}>
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
