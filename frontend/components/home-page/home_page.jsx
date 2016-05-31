var React = require('react');
var HashHistory = require('react-router').hashHistory;
var Modal = require('boron/DropModal');

var UserActions = require('../../actions/user_actions');
var PhotoActions = require('../../actions/photo_actions');
var PhotoStore = require('../../stores/photo_store');

var DiscoverIndex = require('./discover_index');
var UserPhotoIndex = require('./user_photo_index');

var UploadForm = require('../upload-page/upload_form');

var modalStyle = {
    width: '50%'
};

var HomePage = React.createClass({

  getInitialState: function() {
    return {selectedTab: "discover"};
  },

  __onChange: function() {
    if (PhotoStore.errors()) {
      //Bad upload, do nothing
    } else {
      //Good upload, turn off modal
      this.hideModal();
    }
  },

  componentDidMount: function() {
    $('#map-icon').addClass("map-toggled");
    this.toggleDiscover();
    this.storeListener = PhotoStore.addListener(this.__onChange);
  },

  showModal: function(){
      this.refs.modal.show();
  },
  hideModal: function(){
      this.refs.modal.hide();
  },

  toggleMap: function() {
    if(this.state.selectedTab === "discover") {
      var $mapContainer = $(".discover-map-container");
      var $map = $(".discover-map");

      if ($mapContainer.css("display") === "block") {
        $('#map-icon').removeClass("map-toggled");
        $mapContainer.css('display', "none");
        $map.css('visibility','hidden');
      } else {
        $('#map-icon').addClass("map-toggled");
        $mapContainer.css('display', "block");
        $map.css('visibility','visible');
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
    $('.discover-map-container').css('visibility', 'hidden');
  },

  toggleDiscover: function() {
    this.setState({selectedTab: "discover"});
    $("#discover-tab").addClass("tab-highlighted");
    $("#my-photos-tab").removeClass("tab-highlighted");
    $('#map-icon').addClass("map-toggled");
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
    return (
      <div id="home-page">
        <nav className="home-nav">
          <div className="home-nav-left-box">
            <img src={this.logoURL()} height="40px" className="home-logo"/>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.showModal} className="link">Upload</div>
            <Modal ref="modal" modalStyle={modalStyle}>
              <UploadForm/>
            </Modal>
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
               src="http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Google-Maps-icon.png"/>
             <h1 onClick={this.toggleDiscover} className="tab" id="discover-tab">Discover</h1>
          <h1 onClick={this.toggleMyPhotos} className="tab" id="my-photos-tab">My Photos</h1>
        </nav>
        {this.homeContent()}
      </div>
    );
  }
});

module.exports = HomePage;
