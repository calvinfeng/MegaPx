const React = require('react');
const PhotoGrid = require('./photo-grid');
const PhotoActions = require('../../actions/photo-actions');

const UserPhotoIndex = React.createClass({

  componentWillMount() {
    PhotoActions.fetchCurrentUserPhotos();
  },

  render() {
    return (
    <div className="home-content-container">
      <PhotoGrid/>
    </div>
    );
  }

});

module.exports = UserPhotoIndex;
