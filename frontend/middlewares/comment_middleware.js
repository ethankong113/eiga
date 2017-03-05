import { CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, GET_ALL_COMMENTS } from '../actions/comment_actions';
import { receiveComment, renewComment, removeComment, receiveAllComments } from '../actions/comment_actions';
import { createCommentAJAX, updateCommentAJAX, deleteCommentAJAX, getAllCommentsAJAX } from '../utils/comment_api';

const CommentMiddleware = ({getState, dispatch}) => next => action => {
  const getAllCommentsCB = comments => {dispatch(receiveAllComments(comments));};
  const createCommentCB = comment => {dispatch(receiveComment(comment));};
  const updateCommentCB = comment => {dispatch(renewComment(comment));};
  const deleteCommentCB = comment => {dispatch(removeComment(comment));};
  const errorCB = err => {console.log(err);};

  switch(action.type) {
    case GET_ALL_COMMENTS:
      getAllCommentsAJAX(action.url, getAllCommentsCB, errorCB);
      return next(action);
    case CREATE_COMMENT:
      createCommentAJAX(action.comment, createCommentCB, errorCB);
      return next(action);
    case UPDATE_COMMENT:
      updateCommentAJAX(action.commentId, action.body, updateCommentCB, errorCB);
      return next(action);
    case DELETE_COMMENT:
      deleteCommentAJAX(action.commentId, deleteCommentCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentMiddleware;
