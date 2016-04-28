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
            <img src="http://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png"
              width="100"/>
          </div>
          <LoginModal buttonClass="link" buttonText="Log in"/>
          <LoginModal buttonClass="link" buttonText="Sign up"/>
        </div>

        <div className="background-video">
          <video width={this.state.width} autoPlay loop>
            <source src="http://res.cloudinary.com/megapx/video/upload/v1461813226/space-time-lapse.mp4"
              type="video/mp4"/>
          </video>
        </div>

        <div className="welcome">
          <div className="center-panel">
            <h2>Home to everyone's megapixel photos</h2>
            <h5>Time has passed, tech has changed, you are no longer limited to 500 pixels</h5>
            <LoginModal buttonClass="button" buttonText="Get Started"/>
          </div>
        </div>

        <div className="bottom-banner">
          <div className="left-box">
            <img src="https://cdn2.iconfinder.com/data/icons/filled-icons/493/Geotag-256.png"
              width="50" height="50"/>
          </div>
          <div className="right-box">
            <img src="http://www.bartosztomas.eu/upload/templates/img/logo.png"
              width="50" height="50"/>
          </div>
        </div>

        <div className="feature-section">
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
