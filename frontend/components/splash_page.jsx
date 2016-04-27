var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ReactPlayer = require('react-player');

var SplashPage = React.createClass({
  handleClick: function() {
    HashHistory.push({pathname: "/login"});
  },


  render: function() {
    return (
      <div className="splash">
        <div className="nav-bar">
          <div id="logo">
          </div>
          <button
            onClick={this.handleClick}
            className="log-in"
            >Log in</button>
        </div>
        <ReactPlayer
          className="video"
          url="https://youtu.be/9d8wWcJLnFI"
          width={$(window).width()}
          height={$(window).height()}
          volume={0.0}
          playing
          />
      </div>

    );
  }
});

module.exports = SplashPage;
