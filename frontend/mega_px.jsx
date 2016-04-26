var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var SplashPage = require('./components/splash_page');
var LoginForm = require('./components/login_form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <LoginForm/>
        <SplashPage/>
      </div>
    );
  }
});

var routes = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>
    // How to use front-end authentication to decide path location?
    // Signed in => IndexRoute = HomePage
    // Logged out => IndexRoute = SplashPage
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    routes,
    document.getElementById("application")
  );
});
