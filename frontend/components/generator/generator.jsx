import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import { YOUTUBE_API_KEY } from '../../utils/secrets';
import YTSearch from 'youtube-api-search';
import {withRouter} from 'react-router';

class Generator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {source: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    const {book, router} = this.props;
    if (!book && nextProps.book) {
      const url = nextProps.book.url;
      router.push(`/book/${url}`);
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(source) {
    return e => {
      e.preventDefault();
      const {createBook} = this.props;
      source = source.split("?v=");
      if (source.length === 1) {
        source = source.join("");
      } else {
        source = source[1];
      }
      YTSearch({key: YOUTUBE_API_KEY, term: source}, function(data) {
        let target = data.find(datum=>datum.id.videoId === source);
        if (target) {
          //save it as a book and redirect to book page.
          createBook({source});
        } else {
          console.log("Could not find video");
        }
      });
    };
  }

  render() {
    const {source} = this.state;
    const textField = {
      hint: 'Please enter your video source url here',
      label: 'Source URL'
    };
    const btnStyle = {
      margin: 12,
      marginTop: 80,
      display: 'block',
      textAlign: 'center'
    };
    return (
       <div className='generator'>
         <br />
         <h2 className='generator-intro'>Import your video and start adding comments</h2>
         <form onSubmit={this.handleSubmit(source)} className='generator-form'>
           <TextField className='source-field'
             hintText={textField.hint}
             floatingLabelText={textField.label}
             defaultValue={source}
             fullWidth
             onChange={this.update("source")}
             />
           <br />
           <RaisedButton className='generator-btn'
             label='Create' primary={true} style={btnStyle}
             onClick={this.handleSubmit(source)}/>
         </form>
       </div>
    );
  }
}

export default withRouter(Generator);
