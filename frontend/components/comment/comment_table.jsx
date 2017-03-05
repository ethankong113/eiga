import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CommentCard from './comment_card';
import { convertTime } from '../../utils/helpers';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class CommentTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editMode: false, body: '', commentId: null};
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const {url, getAllComments} = this.props;
    getAllComments(url);
  }

  toggleEditMode(id, body) {
    return e => {
      const {editMode} = this.state;
      this.setState({body, editMode: !editMode, commentId: id});
    };
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    const {commentId, body} = this.state;
    this.props.updateComment(commentId, body);
    this.setState({editMode: false, body: '', commentId: null});
  }

  handleClose() {
    this.setState({editMode: false, body: '', commentId: null});
  }

  renderComments(comments) {
    const {seekTo, deleteComment, updateComment} = this.props;
    return comments.map((comment, idx) => (
      <CommentCard
        key={idx}
        seekTo={seekTo}
        deleteComment={deleteComment}
        updateCommnet={updateComment}
        toggleEditMode={this.toggleEditMode}
        {...comment}
        />
    ));
  }

  render() {
    const {comments} = this.props;
    const {editMode, body} = this.state;
    const toolBarStyle = {
      backgroundColor: '#212121'
    };

    const actions = [
      <FlatButton
        label="Update"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />
  ];

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
        <Dialog
          title="Edit Commnet"
          modal={false}
          actions={actions}
          open={editMode}
          onRequestClose={this.handleClose}>
          <TextField
            id="edit-field"
            multiLine={true}
            fullWidth={true}
            onChange={this.update('body')}
            defaultValue={body}/>
        </Dialog>
      </div>
    );
  }
}

export default CommentTable;
