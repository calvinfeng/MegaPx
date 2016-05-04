var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoModal = require('./photo_modal');

var MAX_PER_ROW = 3;
var _scrollCheckpoint = 0;
var _idx;
var PhotoGrid = React.createClass({

  getInitialState: function() {
    return (
      {
        photos: [],
        currentPhotoId: undefined,
        currentPhotoUrl: undefined,
        curentPhotoAspectRatio: undefined
      }
    );
  },

  componentDidMount: function(){
    this.storeListener = PhotoStore.addListener(this.__onChange);
    window.addEventListener("resize", this.resizeHandler);
    // document.addEventListener("scroll", this.scrollHandler);
    _scrollCheckpoint += $(window).height()/2;
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    window.removeEventListener("resize", this.resizeHandler);
    // document.removeEventListener("scroll", this.scrollHandler);
  },

  __onChange: function() {
    console.log("PhotoGrid component received photos");
    _scrollCheckpoint = $(window).height()/2;
    this.setState(
      {
        photos: PhotoStore.inventory(),
        currentPhotoId: undefined,
        currentPhotoUrl: undefined,
        currentPhotoAspectRatio: undefined
      }
    );
    this.organizePhotosInGrid();
  },

  //================= Deprecated feature ===============================
  scrollHandler: function() {
    if ($(document).scrollTop() > _scrollCheckpoint) {
      console.log("Scroll coordinate: ",$(document).scrollTop());
      console.log("Fetching more photos now");
      _scrollCheckpoint += $(window).height()/2;
      this.organizePhotosInGrid();
    }
  },
  //====================================================================
  resizeHandler: function() {
    this.organizePhotosInGrid();
  },

  openModal: function(event) {
    event.preventDefault();
    var photoId = parseInt($(event.currentTarget).attr("photo-id"));
    var url = $(event.currentTarget).attr("url");
    var aspectRatio = $(event.currentTarget).attr("aspect-ratio");
    this.setState({
      currentPhotoId: photoId,
      currentPhotoUrl: url,
      currentPhotoAspectRatio: aspectRatio
    });
    // setState will cause new props being pass into its child
  },

  organizePhotosInGrid: function() {
    _idx = 0;
    $( "#index-photo-grid" ).empty();
    if (this.state.photos) {
      var $row, rowItems, numRowItems, $img, accumWidth, i, photoLimit;
      var $parent = $("#index-photo-grid");
      var photos = this.state.photos;
      // photoLimit = _idx + 10;
      // while(_idx < photos.length && _idx < photoLimit)
      // This is the throttle limit
      while(_idx < photos.length) {
        $row = $("<div></div>");
        $row.addClass("photo-row");
        accumWidth = 0;
        rowItems = [];
        numRowItems = Math.floor(Math.random()*(MAX_PER_ROW - 1)) + 2;

        // Insert images to row
        for (i = 0; i < numRowItems; i++) {
          if (_idx === photos.length) {
            break;
          }
          $img = $("<img></img>");
          $img.addClass("photo-item");
          $img.attr("url", photos[_idx].url);
          $img.attr("photo-id", photos[_idx].id);
          $img.attr("aspect-ratio", photos[_idx].width/photos[_idx].height);
          $img.click(this.openModal);
          accumWidth += photos[_idx].width/photos[_idx].height;
          _idx += 1;
          rowItems.push($img);
        }
        // Modify dimensions of the images before appending to row
        for (i = 0; i < rowItems.length; i++) {
          var scaledHeight = $parent.width()/accumWidth;
          var highResUrl = $(rowItems[i]).attr("url");
          // fetch scaled images instead of full res for index page
          ($(rowItems[i])).attr("src", highResUrl.slice(0,47) +
          "c_scale,h_" + "500" + highResUrl.slice(46));
          ($(rowItems[i])).attr('height', scaledHeight);
          $row.append(rowItems[i]);
        }
        // Append row to the grid
        $parent.append($row);
      }
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
          photoAspectRatio = {this.state.currentPhotoAspectRatio}
        />
      </div>
    );
  }

});
module.exports = PhotoGrid;
