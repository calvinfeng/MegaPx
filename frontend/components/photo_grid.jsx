var React = require('react');
var PhotoStore = require('../stores/photo_store');

var MAX_PER_ROW = 4;
var PhotoGrid = React.createClass({

  getInitialState: function() {
    return {photos: []};
  },

  componentDidMount: function(){
    PhotoStore.addListener(this.__onChange);
  },

  __onChange: function() {
    this.setState({photos: PhotoStore.inventory()});
    console.log("photo-grid received photos");
    this.organizePhotosInGrid();
  },

  organizePhotosInGrid: function() {
    $( "#index-photo-grid" ).empty();
    if (this.state.photos) {
      var $row, rowItems, numRowItems, $img, accumWidth, i, idx;
      var $parent = $("#index-photo-grid");
      var photos = this.state.photos;
      // This is actually O(n) operation even though it seems like a nested
      // loop structure, just look at idx and pay close attention to it
      idx = 0;
      while(idx < photos.length - 1) {
        $row = $("<div></div>");
        $row.addClass("row");
        accumWidth = 0;
        rowItems = [];
        numRowItems = Math.floor(Math.random()*MAX_PER_ROW) + 1;

        // Insert images to row
        for (i = 0; i < numRowItems; i++) {
          if (idx === photos.length) {
            break;
          }
          $img = $("<img></img>");
          $img.addClass("photo-item");
          $img.attr("src", photos[idx].url);
          accumWidth += photos[idx].width/photos[idx].height;
          idx += 1;
          rowItems.push($img);
        }
        console.log("accumWidth: " + accumWidth);

        // Modify dimensions of the images before appending to row
        for (i = 0; i < rowItems.length; i++) {
          ($(rowItems[i])).attr('height', ($parent.width()/accumWidth));
          $row.append(rowItems[i]);
        }
        // Append row to the grid
        $parent.append($row);
      }
      $(".photo-item").wrap("<div class='ripplelink'></div>");
      this.ripplelink();
    }
  },

  ripplelink: function() {
    $(function(){
      var ink, d, x, y;
      $(".ripplelink").click(function(e){
        if($(this).find(".ink").length === 0){
          $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()){
          d = Math.max($(this).outerWidth(), $(this).outerHeight());
          ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;

        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
      });
    });
  },

  render: function() {
    return <div id="index-photo-grid"></div>;
  }

});
module.exports = PhotoGrid;
