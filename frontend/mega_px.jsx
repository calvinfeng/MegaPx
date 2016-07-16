const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const hashHistory = require('react-router').hashHistory;

const UserStore = require('./stores/user_store');
const UserActions = require('./actions/user_actions');

const SplashPage = require('./components/splash_page');
const HomePage = require('./components/home_page');

const MegaPx = React.createClass({

  componentWillMount() {
    UserActions.fetchCurrentUser();
    this.storeListener = UserStore.addListener(this.__ensureLogin);
  },

  componentWillUnmount() {
    this.storeListener.remove();
  },

  __ensureLogin() {
    if (UserStore.currentUser()) {
      hashHistory.push('/home');
    } else {
      hashHistory.replace('/');
    }
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MegaPx}>
      <IndexRoute component={SplashPage}/>
      <Route path="/home" component={HomePage}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(routes, document.getElementById("application"));
});
