import React from 'react';
import YoutubeFrame from 'react-youtube';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import ShareBar from '../share_bar/share_bar';
import Snackbar from 'material-ui/Snackbar';
import { createNoteProps, createPinStyle, btnFieldStyle, btnStyle } from './panel_styles';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newPin: null, newNote: null, noteText: "", sliderValue: 5, overlay: true, snackbar: false};
    this.changeVideoStatus = this.changeVideoStatus.bind(this);
    this.addNote = this.addNote.bind(this);
    this.createNote = this.createNote.bind(this);
    this.cancelNote = this.cancelNote.bind(this);
    this.update = this.update.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
    this.handleSnackbar = this.handleSnackbar.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillMount() {
    const {book, url, fetchBook} = this.props;
    if (book) {
      console.log(book);
    } else {
      fetchBook(url);
    }
  }

  changeVideoStatus(e) {
    const SPACE_KEY = 32;
    if (e.charCode === SPACE_KEY) {
      const {playVideo} = this.props;
      playVideo();
      this.setState(this.state);
    }
  }

  renderVideo(book, opts) {
    if (book) {
      const {videoReady} = this.props;
      return (
        <YoutubeFrame
          id="iframe"
          videoId={book.source}
          opts={opts}
          onReady={videoReady}
          />
      );
    }
    return (
      <div>
        No video
      </div>
    );
  }

  addNote(e) {
    const {getVideoStatus, playVideo} = this.props;
    const {noteText} = this.state;
    const posY = e.pageY - $('.video-overlay').offset().top;
    const posX = e.pageX - $('.video-overlay').offset().left;
    const newTextarea = (
      <TextField
      floatingLabelText="Write a comment"
      multiLine={true}
      rows={2}
      rowsMax={10}
      fullWidth={true}
      defaultValue={noteText}
      onChange={this.update("noteText")}
      />);

    const newPin = (
      <Paper
      style={createPinStyle(posY, posX)}
      zDepth={4}
      circle={true} />
    );

    const newPrimaryBtn = (
      <RaisedButton
      label='Add Note'
      primary={true}
      style={btnStyle}
      onClick={this.createNote}/>
    );

    const newSecondaryBtn = (
      <RaisedButton
      label='Cancel'
      secondary={true}
      style={btnStyle}
      onClick={this.cancelNote}/>
    );

    const newSlider = (
      <Slider
      step={1}
      min={2}
      max={10}
      value={this.state.sliderValue}
      onChange={this.handleSlider}
      />
    );

    const newBtnField = React.createElement('div', {style: btnFieldStyle}, newPrimaryBtn, newSecondaryBtn);
    const newNoteBtn = React.createElement('button', null);
    const newNote = React.createElement('div', createNoteProps(posY, posX), newTextarea, newBtnField);
    // uncomment the following line when we need slider.
    // const newNote = React.createElement('div', createNoteProps(posY, posX), newTextarea, newSlider, newBtnField);
    this.pin = newPin;
    this.note = newNote;
    this.pos = {y: posY, x: posX};
    this.setState({newPin: true, newNote: true});
    if (getVideoStatus() === 'playing') playVideo('pause');
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSlider(e, value) {
    this.setState({sliderValue: value});
  }

  handleSnackbar() {
    this.setState({
      snackbar: false,
    });
  }

  createNote() {
    const {getVideoTime, createComment, book, playVideo, getVideoStatus} = this.props;
    const body = this.state.noteText,
          time = getVideoTime(),
          url = book.url,
          {x, y} = this.pos;
    const comment = {body, time, url, pos_x: x, pos_y: y};
    if (body.length >= 1) createComment(comment);
    this.setState({newPin: false, newNote: false, noteText: ""});
    if (getVideoStatus() === 'paused') playVideo('play');
  }

  cancelNote() {
    const {getVideoStatus, playVideo} = this.props;
    this.setState({newPin: false, newNote: false});
    if (getVideoStatus() === 'paused') playVideo('play');
  }

  handleOverlay() {
    const {overlay, snackbar} = this.state;
    if (overlay) {
      this.setState({overlay: false, newPin: null, newNote: null, noteText: "", snackbar: true});
    } else {
      this.setState({overlay: true, snackbar: true});
    }
  }

  renderOverlay(opts) {
    const {height, width} = opts;
    const {overlay} = this.state;
    return (
      <div className='video-overlay'
        style={{height: `${height}px`,
                width: `${width}px`,
                display: `${overlay ? 'block' : 'none'}`
              }}
        tabIndex="-1"
        onClick={this.addNote}
        onKeyPress={this.changeVideoStatus}>
      </div>
    );
  }

  handlePlay() {
    this.props.playVideo();
    this.setState(this.state);
  }

  render() {
    const {book, getVideoStatus} = this.props;
    const {newPin, newNote, snackbar, overlay} = this.state;
    const opts = {
      height: '485',
      width: '800',
      playerVars: {
        controls: 1
      }
    };
    const snackbarText = [
      'Director Mode is On. You can now add notes to the video.',
      'Director Mode is Off. You can now interact with the video controls.'
    ];

    return (
      <div className="panel-frame">
        <div className="video-frame">
          {this.renderVideo(book, opts)}
          {this.renderOverlay(opts)}
          {newPin ? this.pin : null}
          {newNote ? this.note : null}
        </div>
        <div className="btn-field">
          <RaisedButton
            onClick={this.handlePlay}
            label={getVideoStatus() === 'playing' ? 'Pause' : 'Play'}
            icon={
              getVideoStatus() === 'playing' ?
              <i className="material-icons">pause_circle_filled</i>
              : <i className="material-icons">play_circle_filled</i>
            }
            backgroundColor="#303F9F"
            style={{width: '30%', marginRight: '10px'}}
            />
          <RaisedButton
            label={`Turn Director Mode ${ overlay ? 'Off' : 'On' }`}
            primary={!overlay}
            secondary={overlay}
            style={{width: '76%'}}
            onClick={this.handleOverlay}/>
        </div>
        <Snackbar
          open={snackbar}
          message={overlay ? snackbarText[0] : snackbarText[1]}
          autoHideDuration={2000}
          onRequestClose={this.handleSnackbar}
        />
      </div>
    );
  }
}

export default Panel;
