var React = require('react');
var UserActions = require('../actions/user_actions');
var UserStore = require('../stores/user_store');

var LoginForm = React.createClass({

  getInitialState: function() {
    return {form: "login"};
  },

  __onChange: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  },

  componentDidMount: function() {
    UserStore.addListener(this.__onChange);
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

  logout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    UserActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      username: "",
      password: ""
    });
  },

  greeting: function() {
    // If no one has logged in, return nothing
    if (!this.state.currentUser) {
      return ;
    }
    return (
      <div>
        <h2>Hi, {this.state.currentUser.first_name}</h2>
        <input type="submit" value="logout" onClick={this.logout}/>
      </div>
    );
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

  form: function() {
    // If someone has logged in, won't display form
    if (this.state.currentUser) {
      return ;
    }
    return (
      <form onSubmit={this.handleSubmit}>
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

        <input type="Submit"/>
      </form>
    );
  },

  render: function() {
    return (
      <div id="login-form">
        {this.greeting()}
        {this.errors()}
        {this.form()}
      </div>
    );
  }

});

module.exports = LoginForm;
