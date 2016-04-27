var React = require('react');
var HashHistory = require('react-router').hashHistory;

var SplashPage = React.createClass({
  handleClick: function() {
    HashHistory.push({pathname: "/login"});
  },
  render: function() {
    return (
    <div>
      <h1>Giant Splash Page</h1>
      <button onClick={this.handleClick}>Log in</button>
    </div>

    );
  }
});

module.exports = SplashPage;
