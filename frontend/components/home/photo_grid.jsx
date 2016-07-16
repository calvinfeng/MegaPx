const React = require('react');
const Loader = require('react-loader');
const PhotoStore = require('../../stores/photo_store');
const MarkerStore = require('../../stores/marker_store');
const PhotoModal = require('../photo-display/photo_modal');
const MAX_PER_ROW = 3;

let _idx;

const PhotoGrid = React.createClass({

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

  componentWillReceiveProps: function(nextProps) {
    // If user selects a suggested location, the map will pan and the
    // discover index will re-render. If that's the case, make sure to clear
    // the modal so it won't pop up on re-render
    if (nextProps.isChangingLocation) {
      this.setState({
        currentPhotoId: undefined,
        currentPhotoUrl: undefined,
        curentPhotoAspectRatio: undefined,
        loaded: false
      });
    }
  },

  componentDidMount: function(){
    this.storeListener = PhotoStore.addListener(this.__PhotosOnChange);
    this.markerListener = MarkerStore.addListener(this.__MarkersOnChange);
    window.addEventListener("resize", this.resizeHandler);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    this.markerListener.remove();
    window.removeEventListener("resize", this.resizeHandler);
  },

  resizeHandler() {
    this.organizePhotosInGrid();
  },

  __PhotosOnChange() {
    this.setState({
      photos: PhotoStore.inventory(),
      loaded: true,
      currentPhotoId: undefined,
      currentPhotoUrl: undefined,
      currentPhotoAspectRatio: undefined
    });
    this.organizePhotosInGrid();
  },

  __MarkersOnChange() {
    let currentPhoto = MarkerStore.selectedPhoto();
    this.setState({
      currentPhotoId: currentPhoto.id,
      currentPhotoUrl: currentPhoto.url,
      currentPhotoAspectRatio: currentPhoto.width/currentPhoto.height
    });
  },

  openModal(event) {
  // setState will pass new props its children
    event.preventDefault();
    let photoId = parseInt($(event.currentTarget).attr("photo-id"));
    let url = $(event.currentTarget).attr("url");
    let aspectRatio = $(event.currentTarget).attr("aspect-ratio");
    this.setState({
      currentPhotoId: photoId,
      currentPhotoUrl: url,
      currentPhotoAspectRatio: aspectRatio
    });
  },

  organizePhotosInGrid() {
    _idx = 0;
    $( "#index-photo-grid" ).empty();
    if (this.state.photos) {
      let $row, rowItems, numRowItems, $img, accumWidth, photoLimit;
      let $parent = $("#index-photo-grid");
      let photos = this.state.photos;

      while(_idx < photos.length) {
        $row = $("<div></div>");
        $row.addClass("photo-row");
        accumWidth = 0;
        rowItems = [];
        numRowItems = Math.floor(Math.random()*(MAX_PER_ROW - 1)) + 2;

        // Insert images to row
        for (let i = 0; i < numRowItems; i++) {
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
        for (let i = 0; i < rowItems.length; i++) {
          let scaledHeight = $parent.width()/accumWidth;
          let highResUrl = $(rowItems[i]).attr("url");
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

  /*
  ======================================================================
    This feature is currently removed
  ======================================================================
  */
  ripplelink() {
    $(function(){
      var ink, d, x, y;
      $(".ripplelink").click(function(e){
        if ($(this).find(".ink").length === 0) {
          $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
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
      <Loader
        className="spinner"
        loadedClassName="loadedContent"
        loaded={this.state.loaded}>
        <div className="photo-content-container">
          <div id="index-photo-grid"></div>
          <PhotoModal
            photoId = {this.state.currentPhotoId}
            photoUrl = {this.state.currentPhotoUrl}
            photoAspectRatio = {this.state.currentPhotoAspectRatio}/>
        </div>
      </Loader>
    );
  }
});

module.exports = PhotoGrid;
