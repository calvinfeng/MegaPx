var React = require('react');

// For authentication
var UserStore = require('../stores/user_store');
var PhotoActions = require('../actions/photo_actions');
var PhotoStore = require('../stores/photo_store');
var HashHistory = require('react-router').hashHistory;

var _isMounted;
/* global cloudinary */
var UploadForm = React.createClass({

  getInitialState: function() {
    return {
      imgUrl: undefined,
      imgLat: undefined,
      imgLng: undefined,
      imgPublicId: undefined,
      imgTitle: undefined,
      imgDescription: undefined,
      imgWidth: 0,
      imgHeight: 0,
    };
  },

  setTitle: function(event) {
    this.setState({imgTitle: event.target.value});
  },

  setDescription: function(event) {
    this.setState({imgDescription: event.target.value});
  },

  componentWillMount: function() {
    if (!UserStore.currentUser()) {
      HashHistory.push({pathname: "/"});
    } else {
      _isMounted = true;
    }
  },

  componentDidMount: function() {
    var mapDOMNode = this.refs.geoTagMap;
    var mapOptions = {
      center: {lat: 37.774929, lng: -122.419416},
      zoom: 10
    };
    /* global google */
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.clickListener = this.map.addListener('click', this.mapClickHandle);
    navigator.geolocation.getCurrentPosition(this.setCurrentLocation);
  },

  setCurrentLocation: function(position) {
    var currentLat = position.coords.latitude;
    var currentLng = position.coords.longitude;
    // this is to prevent calling setState on unmounted component
    if (_isMounted) {
      this.map.panTo({lat: currentLat, lng: currentLng});
    }
  },

  componentWillUnmount: function() {
    this.clickListener.remove();
    _isMounted = false;
  },

  uploadToCloud: function(event) {
    event.preventDefault();
    // currently, it only allows one image upload at a time
    cloudinary.openUploadWidget(window.cloudinary_options,
      function(errors, images){
        if (!errors) {
          this.setState({imgUrl: images[0].secure_url});
          this.setState({imgWidth: images[0].width});
          this.setState({imgHeight: images[0].height});
          this.setState({imgPublicId: images[0].public_id});
        }
      }.bind(this)
    );
  },

  showImage: function() {
    if (this.state.imgUrl) {
      return (
        <img className="image-display"
          src={this.state.imgUrl}/>
      );
    } else {
      return ;
    }
  },

  mapClickHandle: function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    this.setState({imgLat: lat, imgLng: lng});
  },

  getLat: function() {
    if (this.state.imgLat) {
      return Math.ceil(1000000 * this.state.imgLat)/1000000;
    } else {
      return "";
    }
  },

  getLng: function() {
    if (this.state.imgLng) {
      return Math.ceil(1000000* this.state.imgLng)/1000000;
    } else {
      return "";
    }
  },

  submitHandle: function(event) {
    event.preventDefault();
    var photo = {
      title: this.state.imgTitle,
      description: this.state.imgDescription,
      url: this.state.imgUrl,
      lat: this.state.imgLat,
      lng: this.state.imgLng,
      height: this.state.imgHeight,
      width: this.state.imgWidth,
      user_id: UserStore.currentUser().id,
      public_id: this.state.imgPublicId
    };
    PhotoActions.postPhoto({photo: photo});
    HashHistory.push({pathname: "/"});
  },

  redirectRoot: function(event) {
    event.preventDefault();
    HashHistory.push({pathname: "/"});
  },

  navigation: function() {
    return (
      <nav className="home-nav">
        <div className="home-nav-left-box">
          <img src="https://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png"
            height="40px" className="home-logo" onClick={this.redirectRoot}/>
        </div>
        <div className="home-nav-right-box">
        </div>
      </nav>
    );
  },

  errors: function() {
    return PhotoStore.errors();
  },


  render: function() {
    return (
      <div>
        {this.navigation()}
        <form onSubmit={this.submitHandle}>
          <article className="upload-form">
            <section className="input-column">

              <div className="geo-tag-map" ref="geoTagMap"></div>
              <div className="geo-info">
                <img src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png/256/map-marker.png"
                  height="30px"/>
                <div className="img-lat">
                  Latitude: {this.getLat()}
                </div>
                <div className="img-lng">
                  Longitude: {this.getLng()}
                </div>
              </div>

              <div className="upload-input-group">
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Title</label>
              </div>

              <div className="upload-input-group">
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
              </div>

              <div className="upload-input-group">
                <img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/upload.png"
                  height="35"
                  onClick={this.uploadToCloud}
                  id="cloud-icon"/>
              </div>

              <div className="submission-container">
                <div className="submission">
                  <input type="Submit" className="upload-submit" value="SUBMIT"/>
                </div>
                <div className="submission-cancel">
                  <div onClick={this.redirectRoot}>Cancel</div>
                </div>
              </div>
            </section>

            <section className="image-display-column">
              <div className="image-frame">
                {this.showImage()}
              </div>
            </section>
          </article>
          <ul>{this.errors()}</ul>
        </form>
      </div>
    );
  }

});

module.exports = UploadForm;
