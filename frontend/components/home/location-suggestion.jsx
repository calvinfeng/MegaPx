const React = require('react');
const LocationConstants = require('../../constants/location-constants');
const LocationActions = require('../../actions/location-actions');

const LocationSuggestion = React.createClass({

  getInitialState() {
    return {selectedSuggestion: undefined};
  },

  clickHandler(event) {
    let value = event.currentTarget.value;
    LocationActions.submitLocation(LocationConstants[value]);
    this.setState({selectedSuggestion: event.currentTarget.value});
  },

  generatePopularLocations() {
    return (
      // ES6 Arrow function
      Object.keys(LocationConstants).map((key) => {
        return (
          <div className="location-item"
            title="This is a popular location, click to go"
            key={key}
            value={key}
            onClick={this.clickHandler}>
            {LocationConstants[key].name}
          </div>
        );
      })
    );
  },

  render() {
    return (
      <div className="discover-suggestion-bar">
        {this.generatePopularLocations()}
      </div>
    );
  }

});

module.exports = LocationSuggestion;
