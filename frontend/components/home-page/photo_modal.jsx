var React = require('react');
var Modal = require('boron/OutlineModal');
var PhotoInfoBox = require('./photo_info_box');
var PhotoCommentBox = require('./photo_comment_box');
//Custom styles for boron modal
var backdropStyle = {
  backgroundColor: 'rgba(0,0,0,0.8)'
};

var modalStyle = {
  height: '90%',
  width: '90%',
  top: '50%',
};

var contentStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'black'
};

var PhotoModal = React.createClass({

  getInitialState: function() {
    return {url: undefined};
  },

  componentWillReceiveProps: function(nextProps) {
    //If a photo gets pass in, show the modal
    if (nextProps.photoId) {
      this.setState({
        id: nextProps.photoId,
        url: nextProps.photoUrl,
        aspectRatio: nextProps.photoAspectRatio
      });
      this.showModal();
    } else {
      this.hideModal();
    }
  },

  componentDidUpdate: function() {
    this.scaleImageToFit();
  },

  scaleImageToFit: function() {
    $("#image-on-display").width($(".photo-modal-left-box").width());
    var imageWidth = $("#image-on-display").width();
    var boxHeight = $(".photo-modal-left-box").height();
    var imageHeight = imageWidth/(this.state.aspectRatio);
    if (imageHeight > boxHeight) {
      $("#image-on-display").height(boxHeight);
      $("#image-on-display").width(boxHeight*this.state.aspectRatio);
    }
  },

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  renderInfoBox: function() {
    if (this.state.id) {
      return <PhotoInfoBox photoId={this.state.id}/>;
    } else {
      return;
    }
  },

  renderCommentBox: function() {
    if (this.state.id) {
      return <PhotoCommentBox photoId={this.state.id}/>;
    } else {
      return;
    }
  },

  render: function() {
    return (
      <Modal ref="modal"
        className="photo-modal"
        modalStyle={modalStyle}
        backdropStyle={backdropStyle}
        contentStyle={contentStyle}>

        <div className="photo-modal-content">
          <div className="photo-modal-left-box">
            <img id="image-on-display" src={this.state.url}/>
          </div>
          <div className="photo-modal-comment-section">
            {this.renderInfoBox()}
            {this.renderCommentBox()}
          </div>
        </div>

      </Modal>
    );
  }
});

module.exports = PhotoModal;
