var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ReactPlayer = require('react-player');

var LoginModal = require('./login_modal');

var SplashPage = React.createClass({

  getInitialState:function() {
    return {width: $(document).width(), height: $(document).height()};
  },

  updateDimensions: function() {
    this.setState({width: $(document).width(), height: $(document).height()});
  },

  componentDidMount: function() {
    window.addEventListener("resize", this.updateDimensions);
  },

  handleClick: function() {
    HashHistory.push({pathname: "/login"});
  },

  render: function() {
    return (
      <div className="splash">
        <div className="nav-bar">
          <div id="logo">
            MegaPx
          </div>
          <div
            onClick={this.handleClick}
            className="link">
            Log in
          </div>
          <div
            onClick={this.handleClick}
            className="link">
            Sign up
          </div>
        </div>

        <div className="video">
          <ReactPlayer
            url= "https://www.youtube.com/watch?v=9d8wWcJLnFI"
            width={this.state.width}
            height={this.state.height}
            volume={0.0}
            playing
            onProgress={this.onProgress}
            />
        </div>

        <div className="welcome">
          <div className="center-panel">
            <h2>Home to everyone's megapixel photos</h2>
            <h5>Time has passed, tech has changed, you are no longer limited to 500 pixels</h5>
  		      <div className="button">Get Started</div>
          </div>
        </div>

        <div className="bottom-banner">
        </div>

        <div className="feature-section">
        </div>

      </div>
    );
  }
});

module.exports = SplashPage;
