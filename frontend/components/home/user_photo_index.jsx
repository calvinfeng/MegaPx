const React = require('react');
const PhotoGrid = require('./photo_grid');
const PhotoActions = require('../../actions/photo_actions');

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
