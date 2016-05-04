var React = require('react');
var PhotoGrid = require('./photo_grid');
var PhotoActions = require('../../actions/photo_actions');

var UserPhotoIndex = React.createClass({

  componentWillMount: function() {
    PhotoActions.fetchCurrentUserPhotos();
  },

  render: function() {
    return (
    <div className="home-content-container">
      <PhotoGrid/>
    </div>
    );
  }
  
});

module.exports = UserPhotoIndex;
