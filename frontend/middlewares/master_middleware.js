import {applyMiddleware} from 'redux';
import BookMiddleware from './book_middleware';

export default applyMiddleware(BookMiddleware);
