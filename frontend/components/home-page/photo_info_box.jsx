var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoActions = require('../../actions/photo_actions');
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

  handleDelete: function(event) {
    event.preventDefault();
    PhotoActions.deletePhoto(this.props.photoId);
  },

  deleteButton: function() {
    if (UserStore.currentUser().id === _currentPhoto.photographer.id) {
      return (
        <div className="photo-delete-button" onClick={this.handleDelete}>
          Delete Photo
        </div>
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
            <h2>{_currentPhoto.title}</h2>
            <span><h2>{_currentPhoto.photographer.username}</h2></span>
          </div>
        </div>

        <div className="photo-description">
          <p>
            {_currentPhoto.description}
          </p>
        </div>

        {this.deleteButton()}
      </div>
    );
  }
});

module.exports = PhotoInfoBox;
