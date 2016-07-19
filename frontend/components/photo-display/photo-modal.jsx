const React = require('react');
const Modal = require('boron/OutlineModal');
const CommentActions = require('../../actions/comment-actions');
const CommentStore = require('../../stores/comment-store');
const PhotoInfoBox = require('./photo-info-box');
const PhotoCommentBox = require('./photo-comment-box');

//Custom styles for boron modal
const backdropStyle = {
  backgroundColor: 'rgba(0,0,0,0.8)'
};

const modalStyle = {
  height: '90%',
  width: '90%',
  top: '50%',
};

const contentStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'black'
};

const PhotoModal = React.createClass({

  getInitialState: function() {
    return {url: undefined, id: undefined, aspectRatio: undefined};
  },

  componentWillReceiveProps: function(nextProps) {
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

  scaleImageToFit() {
    $("#image-on-display").width($(".photo-modal-left-box").width());
    let imageWidth = $("#image-on-display").width();
    let boxHeight = $(".photo-modal-left-box").height();
    let imageHeight = imageWidth/(this.state.aspectRatio);
    if (imageHeight > boxHeight) {
      $("#image-on-display").height(boxHeight);
      $("#image-on-display").width(boxHeight*this.state.aspectRatio);
    }
  },

  showModal(){
    this.refs.modal.show();
  },

  hideModal(){
    this.refs.modal.hide();
  },

  renderInfoBox() {
    if (this.state.id) {
      return <PhotoInfoBox photoId={this.state.id}/>;
    } else {
      return;
    }
  },

  renderCommentBox() {
    if (this.state.id) {
      return <PhotoCommentBox photoId={this.state.id}/>;
    } else {
      return;
    }
  },

  render: function() {
    return (
      <Modal className="photo-modal" ref="modal"
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
