var React = require('react');
var Modal = require('boron/OutlineModal');

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
    if (nextProps.photoId) {
      this.showModal();
      this.setState({url: nextProps.photoUrl});
    } else {
      this.hideModal();
    }
  },

  componentDidUpdate: function() {
    $("#image-on-display").width($(".photo-modal-left-box").width());

    var imageWidth = $("#image-on-display").width();
    var imageHeight = $("#image-on-display").height();
    var boxHeight = $(".photo-modal-left-box").height();
    var aspectRatio = imageWidth/imageHeight;
    if (imageHeight > boxHeight) {
      $("#image-on-display").height($(".photo-modal-left-box").height());
      $("#image-on-display").width(boxHeight*aspectRatio);
    }
  },

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  getPhotoId: function() {
    if (this.state.id) {
      return this.state.id;
    } else {
      return "no id";
    }
  },

  render: function() {
    return (
      <Modal ref="modal" className="photo-modal"
        modalStyle={modalStyle}
        backdropStyle={backdropStyle}
        contentStyle={contentStyle}>
        <div className="photo-modal-content">
          <div className="photo-modal-left-box">
            <img id="image-on-display" src={this.state.url}/>
          </div>
          <div className="photo-modal-comment-section">
            <h2>Here are some comments</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu molestie tortor, eget lobortis augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vel laoreet nibh. Maecenas eget gravida ante. Suspendisse potenti. Aliquam erat volutpat. Nulla dignissim congue condimentum.</p>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = PhotoModal;
