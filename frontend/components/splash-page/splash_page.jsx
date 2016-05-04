var React = require('react');
var HashHistory = require('react-router').hashHistory;
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

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.updateDimensions);
  },

  render: function() {
    return (
      <div className="splash">

        <div className="nav-bar">
          <div id="logo">
            <img src="https://res.cloudinary.com/megapx/image/upload/v1461820253/mega-px-logo.png"
              width="100px"/>
          </div>
          <LoginModal buttonClass="link" buttonText="Log in" form="login"/>
          <LoginModal buttonClass="link" buttonText="Sign up" form="signup"/>
        </div>

        <div className="background-video">
          <video autoPlay loop>
            <source src="https://res.cloudinary.com/megapx/video/upload/br_50,q_70/v1462251437/mega-px/Natgeo-time-lapse-small-1_obygbn.mp4"
              type="video/mp4"/>
          </video>
        </div>

        <div className="welcome">
          <div className="center-panel">
            <h2>Home to everyone's megapixel photos</h2>
            <h5>Time has passed, tech has changed, you are no longer limited to 500 pixels</h5>
            <LoginModal buttonClass="get-started-button"
              buttonText="Get Started"
              form="login"/>
          </div>
        </div>

        <div className="bottom-banner">
          <div className="left-box">
            <img src="https://cdn2.iconfinder.com/data/icons/filled-icons/493/Geotag-256.png"
              width="50" height="50"/>
            <div className="text-box">
              <h1>Location-based Content</h1>
              <p>Discover photography around you</p>
  		        <a className="button">Start uploading</a>

            </div>
          </div>
          <div className="right-box">
            <img src="http://www.bartosztomas.eu/upload/templates/img/logo.png"
              width="50" height="50"/>
            <div className="text-box">
              <h1>Photography Enthusiasts</h1>
              <p>Upload and share your megapixel images</p>
              <a className="button">Start browsing</a>
            </div>
          </div>
        </div>

        <div className="feature-section">
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
