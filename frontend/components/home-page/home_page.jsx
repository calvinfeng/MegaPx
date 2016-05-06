var React = require('react');
var HashHistory = require('react-router').hashHistory;

var UserActions = require('../../actions/user_actions');
var PhotoActions = require('../../actions/photo_actions');

var DiscoverIndex = require('./discover_index');
var UserPhotoIndex = require('./user_photo_index');

var HomePage = React.createClass({

  getInitialState: function() {
    return {selectedTab: "discover"};
  },

  componentDidMount: function() {
    this.toggleDiscover();
  },

  toggleMap: function() {
    if(this.state.selectedTab === "discover") {
      var $map = $('.discover-map');
      if ($map.css('visibility') === 'visible') {
        $('#map-icon').removeClass("map-toggled");
        $map.css('visibility', 'hidden');
      } else {
        $('#map-icon').addClass("map-toggled");
        $map.css('visibility', 'visible');
      }
    } else {
      //This button is disabled
    }
  },

  toggleMyPhotos: function() {
    this.setState({selectedTab: "my photos"});
    $("#my-photos-tab").addClass("tab-highlighted");
    $("#discover-tab").removeClass("tab-highlighted");

    $('#map-icon').removeClass("map-toggled");
    $('.discover-map').css('visibility', 'hidden');
  },

  toggleDiscover: function() {
    this.setState({selectedTab: "discover"});
    $("#discover-tab").addClass("tab-highlighted");
    $("#my-photos-tab").removeClass("tab-highlighted");
  },

  linkToUpload: function() {
    HashHistory.push({pathname: "/upload"});
  },

  handleLogout: function() {
    UserActions.logout();
  },

  scaledAvatarUrl: function() {
    var url = this.props.currentUser.avatar_url;
    return (url.slice(0,47) + "w_100,h_100,c_fill,g_face" + url.slice(46));
  },

  // Content handlers ==================================================
  homeContent: function() {
    if (this.state.selectedTab === "discover") {
      return <DiscoverIndex/>;
    } else if (this.state.selectedTab === "my photos") {
      return <UserPhotoIndex/>;
    } else {
      return (
        <div className="home-content-container">
          <h1>You shouldn't be here</h1>
        </div>
      );
    }
  },

  logoURL: function() {
    return "https://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png";
  },

  render: function() {
    console.log("HomePage component is rendering");
    return (
      <div id="home-page">
        <nav className="home-nav">
          <div className="home-nav-left-box">
            <img src={this.logoURL()} height="40px" className="home-logo"/>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.linkToUpload} className="link">Upload</div>
            <div onClick={this.handleLogout} className="link">Log out</div>
            <div className="current-user">
              <img src={this.scaledAvatarUrl()} height="50px" className="avatar"/>
              {this.props.currentUser.first_name}
            </div>
          </div>
        </nav>
        <nav className="tab-nav">
          <img height="35" id="map-icon"
               onClick={this.toggleMap}
               src="http://www.map-embed.net/wp-content/uploads/2015/11/Google-Maps-icon.png"/>
             <h1 onClick={this.toggleDiscover} className="tab" id="discover-tab">Discover</h1>
          <h1 onClick={this.toggleMyPhotos} className="tab" id="my-photos-tab">My Photos</h1>
        </nav>
        {this.homeContent()}
      </div>
    );
  }
});

module.exports = HomePage;
