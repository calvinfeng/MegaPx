var React = require('react');
var DiscoverMap = require('./discover_map');
var PhotoGrid = require('./photo_grid');

var DiscoverIndex = React.createClass({
  toggleMap: function() {
    var $map = $('.map');
    if ($map.css('visibility') === 'visible') {
      $map.css('visibility', 'hidden');
    } else {
      $map.css('visibility', 'visible');
    }
  },

  componentDidMount: function() {
    $('.discover-map').css('visibility', 'hidden');
  },

  render: function() {
    return (
      <div className="home-content-container">
        <DiscoverMap/>
        <PhotoGrid/>
      </div>
    );
  }
});

module.exports = DiscoverIndex;
