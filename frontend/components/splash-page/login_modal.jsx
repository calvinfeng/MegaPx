var React = require('react');
var Modal = require('boron/ScaleModal');

var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');

//Custom styles for boron modal
var backdropStyle = {
  backgroundColor: 'rgba(0,0,0,0.8)'
};

var modalStyle = {
  width: '35%',
  top: '55%',
};

var contentStyle = {
  backgroundColor: 'transparent',
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

  showModal: function(){
    $('.get-started-button').css('visibility', 'hidden');
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
    $('.get-started-button').css('visibility', 'visible');
    this.setState({userErrors: null});
  },

  toggleGetStartedButton: function() {
    $('.get-started-button').css('visibility', 'visible');
    this.setState({userErrors: null});
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
      <div>
        <div className={this.props.buttonClass} onClick={this.showModal}>
          {this.props.buttonText}
        </div>
        <Modal ref="modal"
          modalStyle={modalStyle}
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}
          onHide={this.toggleGetStartedButton}>

          <form onSubmit={this.handleSubmit} className="login-form">
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
