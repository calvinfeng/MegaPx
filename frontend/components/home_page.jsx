var React = require('react');
var UserActions = require('../actions/user_actions');
var Modal = require('react-modal');

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById("application"));

var HomePage = React.createClass({

  getInitialState: function() {
    return {modalIsOpen: false};
  },

  toggleModal: function() {
    if (this.state.modalIsOpen) {
      this.setState({modalIsOpen: false});
    } else {
      this.setState({modalIsOpen: true});
    }
  },

  handleClick: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  render: function() {
    return (
      <div id="home-page">
        <h1>GIANT HOME PAGE</h1>
        <h2>Welcome, {this.props.currentUser.first_name}</h2>
        <button onClick={this.handleClick}>Log out</button>
        <button onClick={this.toggleModal}/>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2 ref="subtitle">Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
      </div>
    );
  }
});

module.exports = HomePage;
