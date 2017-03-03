import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class CommentTable extends React.Component {

  componentWillMount() {
    const {url, getAllComments} = this.props;
    getAllComments(url);
  }

  renderComments(comments) {
    return comments.map((comment, idx) => (
      <div className="comment-card" key={idx}>
        <div className="comment-body">
          <p>{comment.body}</p>
          <div className="comment-time">{comment.time}</div>
        </div>
        <div className="play-btn">
          <i className="material-icons">play_circle_outline</i>
        </div>
      </div>
    ));
  }

  render() {
    const {comments} = this.props;

    const toolBarStyle = {
      backgroundColor: '#212121'
    };

    return (
      <div className="comment-table">
        <Toolbar style={toolBarStyle}>
          <ToolbarGroup>
            <ToolbarTitle text="Comments"/>
          </ToolbarGroup>
        </Toolbar>
        <div className="table-body">
          {this.renderComments(comments)}
        </div>
      </div>
    );
  }
}

export default CommentTable;
