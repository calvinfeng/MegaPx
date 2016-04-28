var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var UserActions = require('../actions/user_actions');
var UserStore = require('../stores/user_store');

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
    return {
      modalIsOpen: false,
      form: "login",
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

  setFormType: function(event) {
    this.setState({form: event.currentTarget.value});
  },

  setUsername: function(event) {
    this.setState({username: event.target.value});
  },

  setPassword: function(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    UserActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  errors: function() {
    // If no error presents, return nothing
    if (!this.state.userErrors) {
      return;
    }
    return (
      <ul>
        {
          this.state.userErrors.errors.map(function(error, idx) {
            return (<li key={idx}>{error}</li>);
          })
        }
      </ul>
    );
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

        <Modal isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          {this.errors()}
          <form id="login-form" onSubmit={this.handleSubmit}>
            <section>
              <label> Username:
                <input type="text" value={this.state.username}
                  onChange={this.setUsername}/>
              </label>
              <label> Password:
                <input type="password" value={this.state.password}
                  onChange={this.setPassword}/>
              </label>
            </section>

            <section>
              <label> Login
                <input type="Radio" name="action" defaultValue="login"
                  defaultChecked={true}
                  onChange={this.setFormType}/>
              </label>
              <label> Sign up
                <input type="Radio" name="action" defaultValue="signup"
                  onChange={this.setFormType}/>
              </label>
            </section>
            <input className="submit-button" type="Submit"/>
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = LoginModal;
