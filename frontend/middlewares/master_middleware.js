import {applyMiddleware} from 'redux';
import BookMiddleware from './book_middleware';
import CommentMiddleware from './comment_middleware';

export default applyMiddleware(BookMiddleware, CommentMiddleware);
