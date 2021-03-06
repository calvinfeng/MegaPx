var React = require('react');

// For authentication
var UserStore = require('../../stores/user-store');
var PhotoActions = require('../../actions/photo-actions');
var PhotoStore = require('../../stores/photo-store');
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
    this.storeListener = PhotoStore.addListener(this.__onChange);
  },

  __onChange: function() {
    this.setState({
      submitErrors: PhotoStore.errors(),
    });
  },

  componentWillUnmount: function() {
    this.clickListener.remove();
    this.storeListener.remove();
    _isMounted = false;
  },

  setTitle: function(event) {
    this.setState({imgTitle: event.target.value});
  },

  setDescription: function(event) {
    this.setState({imgDescription: event.target.value});
  },

  setCurrentLocation: function(position) {
    var currentLat = position.coords.latitude;
    var currentLng = position.coords.longitude;
    // this is to prevent calling setState on unmounted component
    if (_isMounted) {
      this.map.panTo({lat: currentLat, lng: currentLng});
      this.marker = new google.maps.Marker({
        position: {lat: currentLat, lng: currentLng}
      });
      this.marker.setMap(this.map);
      this.setState({imgLat: currentLat, imgLng: currentLng});
    }
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

  mapClickHandle: function(event) {
    if (this.marker) {
      this.marker.setMap(null);
    }
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    this.setState({imgLat: lat, imgLng: lng});
    this.marker = new google.maps.Marker({
      position: event.latLng
    });
    this.marker.setMap(this.map);
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
  },

  errors: function() {
    if (!this.state.submitErrors) {
      return;
    }
    return (
      <div className="submit-errors">
        <ul>
          {
            this.state.submitErrors.errors.map(function(error, idx) {
              return (<li key={idx}>{error}</li>);
            })
          }
        </ul>
      </div>
    );
  },

  imageLink: function() {
    if (this.state.imgUrl) {
      var titleText;
      if (this.state.imgTitle) {
        titleText = this.state.imgTitle;
      } else {
        titleText = "Untilted";
      }
      return (
        <a href={this.state.imgUrl} className="cloudinary-link">
          {titleText}
        </a>
      );
    } else {
      return (
        <div className="cloudinary-link">
          Click the button on the left to upload photo
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
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

              <div className="group">
                <input id="title" type="text" onChange={this.setTitle} required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="title">Title</label>
              </div>

              <div className="group">
                <input type="text" onChange={this.setDescription} required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
              </div>

              <div className="cloudinary-upload-group">
                <img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/upload.png"
                  height="35"
                  onClick={this.uploadToCloud}
                  id="cloud-icon"/>
                {this.imageLink()}
              </div>

              <div className="submission-container">
                <div className="submission">
                  <input type="Submit" className="upload-submit" value="SUBMIT"/>
                </div>
              </div>
            </section>
          </article>
          {this.errors()}
        </form>
      </div>
    );
  }

});

module.exports = UploadForm;
