var React = require('react');

var PhotoActions = require('../actions/photo_actions');
var PhotoStore = require('../stores/photo_store');
var Masonry = require('react-masonry-component');
var Infinite = require('react-infinite');

var masonryOptions = {
    transitionDuration: 10
};

var PhotoIndex = React.createClass({
  getInitialState: function() {
    return {photos: []};
  },

  componentDidMount: function(){
    PhotoStore.addListener(this.__onChange);
  },

  __onChange: function() {
    this.setState({photos: PhotoStore.inventory()});
  },

  render: function() {
    var photoItems;

    if (this.state.photos) {
      photoItems = this.state.photos.map(function(photo) {
        return (
          <div>
            <img className="photo-item" src={photo.url}/>
          </div>
        );
      });
    } else {
      photoItems = "Loading";
    }
    return (
      <Masonry className={'photo-grid'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}>
        {photoItems}
      </Masonry>
    );
  }

});

module.exports = PhotoIndex;
