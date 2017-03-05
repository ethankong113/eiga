import React from 'react';
import TextField from 'material-ui/TextField';
import { convertTime } from '../../utils/helpers';
import Paper from 'material-ui/Paper';

class CommentCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editMode: false, body: this.props.body};
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(commentId) {
    return e => {
      this.props.deleteComment(commentId);
    };
  }

  render() {
    const {seekTo, idx, time, id, body, pos_x, pos_y, toggleEditMode} = this.props;
    return (
      <div className="comment-card" key={idx}>
        <div className="comment-body">
          <p className="body-text">{body}</p>
          <div className="comment-options">
            <span className="comment-time">{convertTime(time)}</span>
            <span className="hidden-options" onClick={toggleEditMode(id, body)}>
              <i className="material-icons">mode_edit</i>
            </span>
            <span className="hidden-options" onClick={this.deleteComment(id)}>
              <i className="material-icons">delete</i>
            </span>
          </div>
        </div>
        <div className="play-btn">
          <i className="material-icons" onClick={seekTo(time)}>play_circle_outline</i>
        </div>
      </div>
    );
  }
}

export default CommentCard;
