var React = require('react');
var UserActions = require('../actions/user_actions');
var PhotoActions = require('../actions/photo_actions');
var Map = require('./map');
var PhotoIndex = require('./photo_index');

var HomePage = React.createClass({

  getInitialState: function() {
    return {modalIsOpen: false};
  },

  handleClick: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  render: function() {
    return (
      <div id="home-page">
        <h1>GIANT HOME PAGE</h1>
        <h2>Welcome, {this.props.currentUser.first_name}</h2>
        <button onClick={this.handleClick}>Log out</button>
        <Map/>
        <PhotoIndex/>
      </div>
    );
  }
});

module.exports = HomePage;
