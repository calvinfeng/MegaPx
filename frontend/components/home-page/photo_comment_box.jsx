var React = require('react');
var CommentActions = require('../../actions/comment_actions');
var CommentStore = require('../../stores/comment_store');

var PhotoCommentBox = React.createClass({

  getInitialState: function() {
    return {comments: []};
  },

  componentDidMount: function() {
    CommentActions.fetchCommentsForPhoto(this.props.photoId);
    this.storeListener = CommentStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  __onChange: function() {
    this.setState({comments: CommentStore.inventory()});
  },

  scaledAvatarUrl: function(url) {
    return (url.slice(0,47) + "w_60,h_60,c_fill,g_face" + url.slice(46));
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log(this.state.content);
  },

  renderComments: function() {
    if (this.state.comments.length > 0) {
      var comments = this.state.comments;
      var self = this;
      return comments.map(function(comment) {
        return (
          <div className="comment" key={comment.id}>
            <div className="comment-author">
              <img height="50" src={self.scaledAvatarUrl(comment.author.avatar_url)}/>
            </div>
            <div className="comment-content">
              <span>{comment.author.first_name + " " + comment.author.last_name}</span>
              {comment.content}
            </div>
          </div>
        );
      });
    } else {
      return;
    }
  },

  setContent: function(event) {
    this.setState({content: event.target.value});
  },

  render: function() {
    return (
      <div>
        <div className="comment-box">
          {this.renderComments()}
        </div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" id="comment-field" onChange={this.setContent}></input>
          <input type="Submit" id="comment-submit" value="submit"></input>
        </form>
      </div>
    );
  }

});

module.exports = PhotoCommentBox;
