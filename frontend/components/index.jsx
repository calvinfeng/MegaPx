var React = require('react');
var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var HomePage = require('./home_page');
var SplashPage = require('./splash_page');

// getInitialState => render() => componentWillMount => componentDidMount
// setState => shouldComponentUpdate => render() => same ^
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
      return (<HomePage currentUser={this.state.currentUser}/>);
    } else {
      return (<SplashPage/>);
    }
  }

});
module.exports = Index;
