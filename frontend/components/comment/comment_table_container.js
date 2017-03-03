import CommentTable from './comment_table';
import { connect } from 'react-redux';
import { updateComment, deleteComment, getAllComments } from '../../actions/comment_actions';
import { extractList } from '../../utils/helpers';

const mapStateToProps = (state) => ({
  comments: extractList(state.comments.list)
});

const mapDispatchToProps = (dispatch) => ({
   getAllComments: url => {dispatch(getAllComments(url));},
   updateComment: comment => {dispatch(updateComment(comment));},
   deleteComment: commentId => {dispatch(deleteComment(commentId));}
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentTable);
