import { CREATE_BOOK, FETCH_BOOK, receiveBook } from '../actions/book_actions';
import { createBookAJAX, fetchBookAJAX } from '../utils/book_api';

const BookMiddleware = ({getState, dispatch}) => next => action => {
  const createBookCB = book => {dispatch(receiveBook(book));};
  const fetchBookCB = book => {dispatch(receiveBook(book));};
  const errorCB = err => {console.log(err);};

  switch(action.type) {
    case CREATE_BOOK:
      createBookAJAX(action.source, createBookCB, errorCB);
      return next(action);
    case FETCH_BOOK:
      fetchBookAJAX(action.url, fetchBookCB, errorCB);
      return next(action);
    default:
      return next(action);
  }

};

export default BookMiddleware;
