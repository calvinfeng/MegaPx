var React = require('react');
var UserActions = require('../actions/user_actions');
var PhotoActions = require('../actions/photo_actions');

var HomePage = React.createClass({

  getInitialState: function() {
    return {modalIsOpen: false};
  },

  handleClick: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  giveMeAPhoto: function() {
    PhotoActions.fetchSinglePhoto(15);
  },

  render: function() {
    return (
      <div id="home-page">
        <h1>GIANT HOME PAGE</h1>
        <h2>Welcome, {this.props.currentUser.first_name}</h2>
        <button onClick={this.handleClick}>Log out</button>
        <button onClick={this.giveMeAPhoto}>Fetch Photo</button>
      </div>
    );
  }
});

module.exports = HomePage;
