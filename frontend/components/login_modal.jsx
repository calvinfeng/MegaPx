var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var AppElement = document.getElementById('home-page');
Modal.setAppElement(AppElement);

var LoginModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <Modal isOpen={this.state.modalIsOpen}
        onCancel={this.toggleModal}
        backdropClosesModal>
        <ModalHeader text="Lots of text to show scroll behavior"
          showCloseButton onClose={this.toggleModal} />
        <ModalBody>[...]</ModalBody>
        <ModalFooter>
          <Button type="primary" onClick={this.toggleModal}>Close modal</Button>
          <Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
        </ModalFooter>
      </Modal>
    );
  }
});

module.exports = LoginModal;
