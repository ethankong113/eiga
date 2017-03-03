import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, RENEW_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import {merge} from 'lodash';

const _nullComments = {
  list: {},
  errors: []
};

const CommentReducer = (state = _nullComments, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      newState = {list: action.comments, errors: []};
      return newState;
    case RECEIVE_COMMENT:
    case RENEW_COMMENT:
      newState = merge({}, state);
      newState.list[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
