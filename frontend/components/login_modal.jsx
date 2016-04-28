var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var customStyles = {
  content: {
    top: '100px',
    right: '25%',
    bottom: 'auto',
    left: '25%'
  }
};

var LoginModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false,
             form: "login",
             username: "",
             password: "" };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  // Inherit button class and button text from parent
  render: function() {
    return (
      <div>
        <div className={this.props.buttonClass} onClick={this.openModal}>
          {this.props.buttonText}
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}
               style={customStyles}>

          <h2>Under construction...</h2>
          <form>
            <label>Username
              <input type="text"/>
            </label>
            <label>Password
              <input type="password"/>
            </label>
            <input type="submit"/>
            <button onClick={this.closeModal}>close</button>
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = LoginModal;
