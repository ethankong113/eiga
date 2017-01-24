import Panel from './panel';
import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
   book: state.book.data
});

const mapDispatchToProps = (dispatch) => ({
   fetchBook: (url)=>{dispatch(fetchBook(url));}
});
export default connect(mapStateToProps, mapDispatchToProps)(Panel);
