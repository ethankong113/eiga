import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BookReducer from './book_reducer';
import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  book: BookReducer,
  comments: CommentReducer
});

export default RootReducer;
