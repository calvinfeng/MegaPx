var React = require('react');
var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var HomePage = require('./home-page/home_page');
var SplashPage = require('./splash-page/splash_page');

var Index = React.createClass({

  getInitialState: function() {
    return {currentUser: null};
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  componentWillMount: function() {
    UserActions.fetchCurrentUser();
    this.storeListener = UserStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  render: function() {
    if (this.state.currentUser) {
      return (
        <div>
          <HomePage currentUser={this.state.currentUser}/>
        </div>
      );
    } else {
      return (
        <div>
          <SplashPage/>
        </div>
      );
    }
  }

});
module.exports = Index;
