var React = require('react');
var UserStore = require('../../stores/user_store');
var CommentActions = require('../../actions/comment_actions');
var CommentStore = require('../../stores/comment_store');
var ScrollArea = require('react-scrollbar');

var PhotoCommentBox = React.createClass({

  getInitialState: function() {
    return {comments: [], content: ''};
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
    var comment = {
      user_id: UserStore.currentUser().id,
      photo_id: this.props.photoId,
      content: this.state.content
    };
    CommentActions.postComment(comment);
    this.setState({content: ''});
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
      <div className="comment-box">
        <ScrollArea
          speed={0.8}
          className="comment-scroll"
          horizontal={false}>
          {this.renderComments()}
        </ScrollArea>

        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text"
            id="comment-field"
            onChange={this.setContent}
            value={this.state.content}
            placeholder="Your comment"/>
          <input type="Submit" id="comment-submit" value="submit"></input>
        </form>
      </div>
    );
  }

});

module.exports = PhotoCommentBox;
