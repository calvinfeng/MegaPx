var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var UserStore = require('../../stores/user_store');

var _currentPhoto;
var PhotoInfoBox = React.createClass({

  componentWillMount: function() {
    //Instead of hitting the backend for photographer information,
    //When the site is loaded, everything is already packed into PhotoStore
    var photos = PhotoStore.inventory();
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].id === this.props.photoId) {
        _currentPhoto = photos[i];
        break;
      }
    }
  },

  scaledAvatarUrl: function() {
    var url = _currentPhoto.photographer.avatar_url;
    return (url.slice(0,47) + "w_60,h_60,c_fill,g_face" + url.slice(46));
  },

  deleteButton: function() {
    if (UserStore.currentUser().id === _currentPhoto.photographer.id) {
      return (
        <button className="photo-delete-button">
          Delete Photo
        </button>
      );
    } else {
      return ;
    }
  },

  render: function() {

    return (
      <div className="photo-info-container">
        <div className="photo-header">
          <img src={this.scaledAvatarUrl()} className="photographer-avatar"/>
          <div className="photo-title-container">
            <h1>{_currentPhoto.title}</h1>
            <h2>{_currentPhoto.photographer.username}</h2>
          </div>
        </div>
        <div className="photo-description">
          <p>
            {_currentPhoto.description}Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse sit amet suscipit diam.
            Nunc sed nisl cursus, volutpat purus non, venenatis justo.
          </p>
          {this.deleteButton()}
        </div>
      </div>
    );
  }
});

module.exports = PhotoInfoBox;
