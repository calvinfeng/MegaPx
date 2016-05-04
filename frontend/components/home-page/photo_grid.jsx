var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoModal = require('./photo_modal');

var MAX_PER_ROW = 3;
var _scrollCheckpoint = 0;
var PhotoGrid = React.createClass({

  getInitialState: function() {
    return (
      {
        photos: [],
        currentPhotoId: undefined,
        currentPhotoUrl: undefined
      }
    );
  },

  componentDidMount: function(){
    this.storeListener = PhotoStore.addListener(this.__onChange);
    window.addEventListener("resize", this.resizeHandler);
    document.addEventListener("scroll", this.scrollHandler);
    _scrollCheckpoint += $(window).height();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    window.removeEventListener("resize", this.resizeHandler);
    document.removeEventListener("scroll", this.scrollHandler);
  },

  __onChange: function() {
    console.log("PhotoGrid component received photos");
    this.setState(
      {
        photos: PhotoStore.inventory(),
        currentPhotoId: undefined,
        currentPhotoUrl: undefined
      }
    );
    this.organizePhotosInGrid();
    _scrollCheckpoint = $(window).height();
  },

  scrollHandler: function() {
    if ($(document).scrollTop() > _scrollCheckpoint) {
      console.log($(document).scrollTop());
      _scrollCheckpoint += $(window).height();
    }
  },

  resizeHandler: function() {
    this.organizePhotosInGrid();
  },

  openModal: function(event) {
    event.preventDefault();
    var photoId = parseInt($(event.currentTarget).attr("photo-id"));
    var url = event.currentTarget.src;
    // setState will cause new props being pass into its child
    this.setState({currentPhotoId: photoId, currentPhotoUrl: url});
  },

  organizePhotosInGrid: function() {
    $( "#index-photo-grid" ).empty();
    if (this.state.photos) {
      var $row, rowItems, numRowItems, $img, accumWidth, i, idx;
      var $parent = $("#index-photo-grid");
      var photos = this.state.photos;
      // This is actually O(n) operation even though it seems like a nested
      // loop structure
      idx = 0;
      while(idx < photos.length) {
        $row = $("<div></div>");
        $row.addClass("photo-row");
        accumWidth = 0;
        rowItems = [];
        numRowItems = Math.floor(Math.random()*(MAX_PER_ROW - 1)) + 2;

        // Insert images to row
        for (i = 0; i < numRowItems; i++) {
          if (idx === photos.length) {
            break;
          }
          $img = $("<img></img>");
          $img.addClass("photo-item");
          $img.attr("src", photos[idx].url);
          $img.attr("photo-id", photos[idx].id);
          $img.click(this.openModal);
          accumWidth += photos[idx].width/photos[idx].height;
          idx += 1;
          rowItems.push($img);
        }
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
    return (
      <div className="photo-content-container">
        <div id="index-photo-grid"></div>
        <PhotoModal
          photoId = {this.state.currentPhotoId}
          photoUrl = {this.state.currentPhotoUrl}
        />

      </div>
    );
  }

});
module.exports = PhotoGrid;
