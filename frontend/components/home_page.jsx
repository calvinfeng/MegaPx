var React = require('react');
var UserActions = require('../actions/user_actions');
var PhotoActions = require('../actions/photo_actions');
var Map = require('./map');
var PhotoIndex = require('./photo_index');
var PhotoGrid = require('./photo_grid');

var HomePage = React.createClass({

  getInitialState: function() {
    return {modalIsOpen: false};
  },

  componentDidMount: function() {
    $('.map').css('visibility', 'hidden');
  },

  toggleMap: function() {
    var $map = $('.map');
    if ($map.css('visibility') === 'visible') {
      $map.css('visibility', 'hidden');
    } else {
      $map.css('visibility', 'visible');
    }
  },

  handleClick: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  render: function() {
    return (
      <div id="home-page">
        <div className="home-nav">
          <div className="home-nav-left-box">
            <div onClick={this.toggleMap} className="link">Toggle map</div>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.handleClick} className="link">Log out</div>
          </div>
        </div>
        <h1>Welcome {this.props.currentUser.first_name}</h1>
        <div className="home-content-container">
          <Map/>
          <PhotoGrid/>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
