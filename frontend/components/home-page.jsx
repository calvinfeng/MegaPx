const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Modal = require('boron/DropModal');

const UserActions = require('../actions/user-actions');
const UserStore = require('../stores/user-store');
const PhotoActions = require('../actions/photo-actions');
const PhotoStore = require('../stores/photo-store');

const DiscoverIndex = require('./home/discover-index');
const UserPhotoIndex = require('./home/user-photo-index');
const LocationSearch = require('./home/location-search');

const UploadForm = require('./upload/upload-form');

const modalStyle = { width: '50%' };

const googleMapIcon = `https://icons.iconarchive.com/icons/
dakirby309/simply-styled/256/Google-Maps-icon.png`;

const megaPxIcon = `https://res.cloudinary.com/megapx/image/
upload/v1461820253/mega-px-logo.png`;

const Tab = {
  discover: "Discover",
  myPhotos: "My Photos"
};
/*
Component has been updated to ES6
*/
const HomePage = React.createClass({

  getInitialState() {
    // To prevent people who try to access home page by typing #home in URL
    if (!UserStore.currentUser()) { window.location = "/"; }
    return {
      selectedTab: Tab.discover,
      currentUser: UserStore.currentUser()
    };
  },

  componentDidMount() {
    $('#map-icon').addClass("map-toggled");
    this.toggleDiscover();
    this.storeListener = PhotoStore.addListener(this.__onChange);
  },

  __onChange() {
    // If user has successfully uploaded his/her photo, modal is closed
    if (PhotoStore.photo()) {
      this.hideModal();
    }
  },

  showModal(){
    this.refs.modal.show();
  },

  hideModal(){
    this.refs.modal.hide();
  },

  toggleMap() {
    // DiscoverTab is required for user to interact with map icon
    if (this.state.selectedTab === Tab.discover) {
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
    }
  },

  toggleMyPhotos() {
    this.setState({selectedTab: Tab.myPhotos});
    $("#my-photos-tab").addClass("tab-highlighted");
    $("#discover-tab").removeClass("tab-highlighted");
    $('#map-icon').removeClass("map-toggled");
    $('.discover-map-container').css('visibility', 'hidden');
  },

  toggleDiscover() {
    this.setState({selectedTab: Tab.discover});
    $("#discover-tab").addClass("tab-highlighted");
    $("#my-photos-tab").removeClass("tab-highlighted");
    $('#map-icon').addClass("map-toggled");
  },

  handleLogout() {
    UserActions.logout();
  },

  scaledAvatarUrl() {
    var url = this.state.currentUser.avatar_url;
    return (url.slice(0,47) + "w_100,h_100,c_fill,g_face" + url.slice(46));
  },

  // Content handlers ==================================================
  homeContent() {
    if (this.state.selectedTab === Tab.discover) {
      return <DiscoverIndex/>;
    } else if (this.state.selectedTab === Tab.myPhotos) {
      return <UserPhotoIndex/>;
    } else {
      return (
        <div className="home-content-container">
          <h1>You shouldn't be here</h1>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div id="home-page">
        <nav className="home-nav">
          <div className="home-nav-left-box">
            <img src={megaPxIcon} height="40px" className="home-logo"/>
          </div>
          <div className="home-nav-right-box">
            <div onClick={this.showModal} className="link">Upload</div>
            <Modal ref="modal" modalStyle={modalStyle}>
              <UploadForm/>
            </Modal>
            <div onClick={this.handleLogout} className="link">Log out</div>
            <div className="current-user">
              <img src={this.scaledAvatarUrl()} height="50px" className="avatar"/>
              {this.state.currentUser.first_name}
            </div>
          </div>
        </nav>
        <nav className="tab-nav">
          <div className="tab-container">
            <img height="35" id="map-icon"
              onClick={this.toggleMap}
              src={googleMapIcon}/>
            <h1 className="tab" id="discover-tab" onClick={this.toggleDiscover}>
              Discover
            </h1>
            <h1 className="tab" id="my-photos-tab" onClick={this.toggleMyPhotos}>
              My Photos
            </h1>
          </div>
          <div className="location-search-bar">
            <LocationSearch/>
          </div>
        </nav>
        {this.homeContent()}
      </div>
    );
  }
});

module.exports = HomePage;
