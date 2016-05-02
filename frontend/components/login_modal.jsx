var React = require('react');
var Modal = require('react-modal');

var UserActions = require('../actions/user_actions');
var UserStore = require('../stores/user_store');

var customStyles = {
  content: {
    top: '35%',
    right: '35%',
    bottom: 'auto',
    left: '35%',
    background: 'transparent',
    border: '2px solid white'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)'
  }
};

var LoginModal = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false,
      username: "",
      password: ""
    };
  },

  __onChange: function() {
    // If log in successfully, close the modal
    if (UserStore.currentUser()) {
      this.closeModal();
    } else {
      // Report errors to user
      this.setState({userErrors: UserStore.errors()});
    }
  },

  componentDidMount: function() {
    this.storeListener = UserStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  setUsername: function(event) {
    this.setState({username: event.target.value});
  },

  setPassword: function(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    UserActions[this.props.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  guestLogin: function(event) {
    event.preventDefault();
    UserActions.guestLogin();
  },

  errors: function() {
    if (this.state.userErrors) {
      return (
        <ul>
          {
            this.state.userErrors.errors.map(function(error, idx) {
              return (<li key={idx}>{error}</li>);
            })
          }
        </ul>
      );
    } else {
      return;
    }
  },

  openModal: function() {
    $('.get-started-button').css('visibility', 'hidden');
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    $('.get-started-button').css('visibility', 'visible');
    this.setState({modalIsOpen: false, userErrors: null});
    // BUG Report: closing modal does not get rid of all the error messages
    // because there are three modals with three individual states
  },

  submitButtons: function() {
    if (this.props.form === "login") {
      return (
        <input className="submit-button" type="Submit" value="Login"/>
      );
    } else {
      return (
        <input className="submit-button" type="Submit" value="Sign up"/>
      );
    }
  },

  // Inherit button class and button text from parent
  render: function() {
    return (
      <div className="modal">
        <div className={this.props.buttonClass} onClick={this.openModal}>
          {this.props.buttonText}
        </div>
        <Modal isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <form onSubmit={this.handleSubmit}>
            <section className="user-input-section">
              <h1 className="login-header">{this.props.buttonText}</h1>
              <input placeholder="Username" type="text" className="login-input"
                value={this.state.username}
                onChange={this.setUsername}
                require=""/>
              <input placeholder="Password" type="password" className="login-input"
                value={this.state.password}
                onChange={this.setPassword}
                require=""/>
            </section>
            {this.submitButtons()}
            <button className="submit-button" id="guest-login" onClick={this.guestLogin}>
              Guest Login
            </button>
            <h1 className="login-error">{this.errors()}</h1>
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = LoginModal;
