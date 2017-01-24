import Generator from './generator';
import { connect } from 'react-redux';
import { createBook } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
  book: state.book.data
});

const mapDispatchToProps = (dispatch) => ({
   createBook: (source)=>{dispatch(createBook(source));}
});

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
