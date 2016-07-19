const React = require('react');
const Modal = require('boron/ScaleModal');
const UserActions = require('../../actions/user-actions');
const UserStore = require('../../stores/user-store');

//Custom styles for boron modal
let backdropStyle = {
  backgroundColor: 'rgba(0,0,0,0.8)'
};

let modalStyle = {
  width: '35%',
  top: '55%',
};

let contentStyle = {
  backgroundColor: 'transparent',
};

const LoginModal = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
      modalIsOpen: false
    };
  },

  componentDidMount() {
    this.storeListener = UserStore.addListener(this.__onChange);
  },

  componentWillUnmount() {
    this.storeListener.remove();
  },

  __onChange() {
    // If log in successfully, close the modal
    if (UserStore.currentUser()) {
      this.closeModal();
    } else {
    // Report errors to user
      this.setState({userErrors: UserStore.errors()});
    }
  },

  setUsername(event) {
    this.setState({username: event.target.value});
  },

  setPassword(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    UserActions[this.props.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  guestLogin(event) {
    event.preventDefault();
    this.animateTyping(UserActions.guestLogin);
  },
  //ES5 Style of function declaration
  animateTyping: function(callback) {
    $(function(){
      $("#username").typed({
        strings:["calvin"],
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        loopCount: false,
        contentType: 'text',
        callback: function() {
          $("#password").typed({
            strings:["123456"],
            typeSpeed: 20,
            backDelay: 500,
            loop: false,
            loopCount: false,
            contentType: 'text',
            callback: callback });
        }
      });
    });
  },

  errors() {
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

  showModal(){
    $('.get-started-button').css('visibility', 'hidden');
    this.refs.modal.show();
  },

  hideModal(){
    this.refs.modal.hide();
    $('.get-started-button').css('visibility', 'visible');
    this.setState({userErrors: null});
  },

  toggleGetStartedButton() {
    $('.get-started-button').css('visibility', 'visible');
    this.setState({userErrors: null});
  },

  submitButtons() {
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
  render() {
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
              <input
                onChange={this.setUsername}
                value={this.state.username}
                placeholder="Username"
                type="text"
                className="login-input"
                id="username"/>
              <input
                onChange={this.setPassword}
                value={this.state.password}
                placeholder="Password"
                type="password"
                className="login-input"
                id="password"
                />
            </section>
            {this.submitButtons()}
            <button
              className="submit-button"
              id="guest-login"
              onClick={this.guestLogin}>
              Demo
            </button>
            <h1 className="login-error">{this.errors()}</h1>
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = LoginModal;
