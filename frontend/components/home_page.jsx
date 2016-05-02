var React = require('react');
var HashHistory = require('react-router').hashHistory;

var UserActions = require('../actions/user_actions');
var PhotoActions = require('../actions/photo_actions');
var Map = require('./map');
var PhotoGrid = require('./photo_grid');
var DiscoverIndex = require('./discover_index');
var UserPhotoIndex = require('./user_photo_index');
var HomePage = React.createClass({

  getInitialState: function() {
    return {modalIsOpen: false, selectedTab: "discover"};
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

  toggleMyPhotos: function() {
    this.setState({selectedTab: "my photos"});
  },

  toggleDiscover: function() {
    this.setState({selectedTab: "discover"});
  },

  handleLogout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  //Content handlers
  homeContent: function() {
    if (this.state.selectedTab === "discover") {
      return <DiscoverIndex/>;
    } else {
      return (
        <div className="home-content-container">
          <UserPhotoIndex/>
        </div>
      );
    }
  },

  logoURL: function() {
    return "https://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png";
  },

  render: function() {
    return (
      <div id="home-page">
        <nav className="home-nav">
          <div className="home-nav-left-box">
            <img src={this.logoURL()} height="40px" className="home-logo"/>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.toggleMap} className="link">Toggle map</div>
            <div onClick={this.linkToUpload} className="link">Upload</div>
            <div onClick={this.handleLogout} className="link">Log out</div>
          </div>
        </nav>
        <nav className="tab-nav">
          <h1 onClick={this.toggleDiscover} className="tab">Discover</h1>
          <h1 onClick={this.toggleMyPhotos} className="tab">My Photos</h1>
        </nav>
        {this.homeContent()}
      </div>
    );
  }
});

module.exports = HomePage;
