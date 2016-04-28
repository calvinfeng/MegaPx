var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');

var Index = require('./components/index');
var LoginForm = require('./components/login_form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Index}/>
      <Route path="/login" component={LoginForm}></Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    routes,
    document.getElementById("application")
  );
});
