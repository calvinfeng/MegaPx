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
    }.bind(this));
  },

  showImage: function() {
    if (this.state.imgUrl) {
      return <img height="400" src={this.state.imgUrl}></img>;
    } else {
      return ;
    }
  },

  mapClickHandle: function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    this.setState({imgLat: lat, imgLng: lng});
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

  cancelHandle: function(event) {
    event.preventDefault();
    HashHistory.push({pathname: "/"});
  },

  errors: function() {
    return PhotoStore.errors();
  },

  render: function() {
    return (
      <div>
        <h1>Upload image</h1>
        <form onSubmit={this.submitHandle}>
          <article className="upload">
            <section className="text-input-area">
              <input type="text" placeholder="Title"
                value={this.state.imgTitle || ""}
                onChange={this.setTitle}/>
              <textarea placeholder="Description"
                value={this.state.imgDescription || ""}
                onChange={this.setDescription}/>
              <input type="text" placeholder="Latitude"
                value={this.state.imgLat || ""}
                disabled={true}/>
              <input type="text" placeholder="Longitude"
                value={this.state.imgLng || ""}
                disabled={true}/>
              <button onClick={this.uploadToCloud}>Select files</button>
            </section>

            <section className="geo-input-area">
              <div className="geo-tag-map" ref="geoTagMap"></div>
            </section>

            <section className="image-upload-area">
              {this.showImage()}
            </section>
          </article>
          <input type="Submit"/>
          <button onClick={this.cancelHandle}>Back</button>
          <ul>{this.errors()}</ul>
        </form>
      </div>
    );
  }

});

module.exports = UploadForm;
