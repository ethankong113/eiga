import { RECEIVE_BOOK } from '../actions/book_actions';
import { merge } from 'lodash';

const _nullBook = {
  data: null,
  errors: []
};

const BookReducer = (state = _nullBook, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BOOK:
      newState = {data: action.book, errors: []};
      return newState;
    default:
      return state;
  }
};

export default BookReducer;
