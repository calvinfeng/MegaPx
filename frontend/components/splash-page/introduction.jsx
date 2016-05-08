var React = require('react');
var ReactPlayer = require('react-player');

var Introduction = React.createClass({
  redirectToGithub: function() {
    window.location = "https://github.com/calvinfeng";
  },

  redirectToLinkedin: function() {
    window.location = "https://www.linkedin.com/in/calvin-feng-a26b9b76";
  },

  render: function() {
    return (
      <div className="introduction">
        <ReactPlayer
          youtubeConfig={{ preload: true }}
          className="react-player"
          width={$(window).width()}
          height={0.8*$(window).height()}
          url="https://youtu.be/dTt-O58CKvA"
          playing={true}/>
        <div className="about-me">
          <div className="about-me-left-box">
            <img
              className="github"
              src="http://www.aha.io/assets/integration_logos/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png"
              onClick={this.redirectToGithub}
              height="80"/>
          </div>
          <div className="about-me-right-box">
            <img
              className="linkedin"
              src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300"
              onClick={this.redirectToLinkedin}
              height="40"/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Introduction;
