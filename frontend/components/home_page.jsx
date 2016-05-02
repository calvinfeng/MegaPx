var React = require('react');
var HashHistory = require('react-router').hashHistory;

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

  linkToUpload: function() {
    HashHistory.push({pathname: "/upload"});
  },

  toggleMap: function() {
    var $map = $('.map');
    if ($map.css('visibility') === 'visible') {
      $map.css('visibility', 'hidden');
    } else {
      $map.css('visibility', 'visible');
    }
  },

  handleLogout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  render: function() {
    return (
      <div id="home-page">
        <nav className="home-nav">
          <div className="home-nav-left-box">
            <img src="https://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png"
              height="40px" className="home-logo"/>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.linkToUpload} className="link">Upload</div>
            <div onClick={this.toggleMap} className="link">Toggle map</div>
            <div onClick={this.handleLogout} className="link">Log out</div>
          </div>
        </nav>
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
