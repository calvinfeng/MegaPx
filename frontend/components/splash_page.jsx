const React = require('react');
const hashHistory = require('react-router').hashHistory;
const LoginModal = require('./splash/login_modal');
const Introduction = require('./splash/introduction');
const UserStore = require('../stores/user_store');

let timeLapse = `https://res.cloudinary.com/megapx/video/upload/
br_50,q_70/v1462251437/mega-px/Natgeo-time-lapse-small-1_obygbn.mp4`;

let megaPxIcon = `https://res.cloudinary.com/megapx/image/upload/
v1461820253/mega-px-logo.png`;

let cloudIcon = `https://image.freepik.com/free-icon/
upload-to-the-cloud-dark-interface-symbol_318-70389.png`;

let geoIcon = `https://cdn1.iconfinder.com/data/icons/navigation-14/512/
geo-point-tag-location-man-place-128.png`;

let welcomeMessage = `Time has passed, tech has changed, you are no longer
limited to 500 pixels`;

const SplashPage = React.createClass({

  getInitialState() {
    return {width: $(document).width(), height: $(document).height()};
  },

  componentWillMount() {
    if (UserStore.currentUser()) {
      hashHistory.push("/home");
    }
  },

  updateDimensions() {
    this.setState({width: $(document).width(), height: $(document).height()});
  },

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.onscroll = function(e) {
      if (window.pageYOffset > $(window).height()*0.9) {
        $(".nav-bar").css('background-color', 'black');
      } else {
        $(".nav-bar").css('background-color', 'transparent');
      }
    };
  },

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  },

  clickHandle() {
    $('html,body').animate({scrollTop: $(".introduction").offset().top},'slow');
  },

  redirectToGithub() {
    window.location = "https://github.com/calvinfeng";
  },

  redirectToLinkedin() {
    window.location = "https://www.linkedin.com/in/calvin-feng-a26b9b76";
  },

  render() {
    return (
      <div className="splash">

        <div className="nav-bar">
          <div id="logo">
            <img src={megaPxIcon} width="100px"/>
          </div>
          <LoginModal buttonClass="link" buttonText="Sign up" form="signup"/>
          <LoginModal buttonClass="link" buttonText="Log in" form="login"/>
        </div>

        <div className="background-video">
          <video autoPlay loop>
            <source src={timeLapse} type="video/mp4"/>
          </video>
        </div>

        <div className="welcome">
          <div className="center-panel">
            <div className="center-text-box">
              <h2>Home to everyone's megapixel photos</h2>
              <h5>{welcomeMessage}</h5>
            </div>
            <LoginModal buttonClass="get-started-button"
              buttonText="Get Started"
              form="login"/>
          </div>
        </div>

        <div className="bottom-banner">
          <div className="left-box">
            <img src={geoIcon}
              width="40"
              height="40"/>
            <div className="text-box">
              <h1>Location-based Content</h1>
              <p>Discover photography around you</p>
              <a className="button" onClick={this.redirectToGithub}>My GitHub</a>

            </div>
          </div>
          <div className="right-box">
            <img src={cloudIcon}
              width="40"
              height="40"/>
            <div className="text-box">
              <h1>Photography Enthusiasts</h1>
              <p>Upload and share your megapixel images</p>
              <a className="button" onClick={this.redirectToLinkedin}>My Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
