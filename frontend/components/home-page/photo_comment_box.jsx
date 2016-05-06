var React = require('react');
var CommentActions = require('../../actions/comment_actions');
var CommentStore = require('../../stores/comment_store');

var PhotoCommentBox = React.createClass({
  componentWillMount: function() {
    // CommentActions.fetchCommentsForPhoto(this.props.photoId);
  },

  componentDidMount: function() {
    CommentStore.addListener(this.__onChange);
  },

  __onChange: function() {
    this.setState({comments: CommentStore.inventory()});
  },

  render: function() {
    return <h1>Hello</h1>;
  }

});

module.exports = PhotoCommentBox;
