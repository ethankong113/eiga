import React from 'react';
import YoutubeFrame from 'react-youtube';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import { createNoteProps, createPinStyle, btnFieldStyle, btnStyle } from './panel_styles';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.videoTarget = null;
    this.videoStatus = 'loading'; //loading, ready, playing, paused, error
    this.state = {newPin: null, newNote: null, noteText: "", sliderValue: 5};
    this.playVideo = this.playVideo.bind(this);
    this.videoReady = this.videoReady.bind(this);
    this.changeVideoStatus = this.changeVideoStatus.bind(this);
    this.addNote = this.addNote.bind(this);
    this.createNote = this.createNote.bind(this);
    this.cancelNote = this.cancelNote.bind(this);
    this.update = this.update.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  componentWillMount() {
    const {book, url, fetchBook} = this.props;
    if (book) {
      console.log(book);
    } else {
      fetchBook(url);
    }
  }

  playVideo() {
    const {videoStatus, videoTarget} = this;
    if (videoStatus === 'ready' || videoStatus === 'paused') {
      videoTarget.playVideo();
      this.videoStatus = 'playing';
    } else if (videoStatus === 'playing') {
      videoTarget.pauseVideo();
      this.videoStatus = 'paused';
    }
  }

  videoReady(e) {
    this.videoStatus = 'ready';
    this.videoTarget = e.target;
  }

  changeVideoStatus(e) {
    const SPACE_KEY = 32;
    if (e.charCode === SPACE_KEY) {
      this.playVideo();
    }
  }

  renderVideo(book, opts) {
    if (book) {
      return (
        <YoutubeFrame
          id="iframe"
          videoId={book.source}
          opts={opts}
          onReady={this.videoReady}
          />
      );
    } else {
      return (
        <div>
          No video
        </div>
      );
    }
  }

  addNote(e) {
    const {noteText} = this.state;
    const posY = e.pageY - $('.video-overlay').offset().top;
    const posX = e.pageX - $('.video-overlay').offset().left;
    const newTextarea = (() => (
      <TextField
      floatingLabelText="Write a comment"
      multiLine={true}
      rows={2}
      rowsMax={10}
      fullWidth={true}
      defaultValue={noteText}
      onChange={this.update("noteText")}
      />))();
    const newPin = (() => (
      <Paper
      style={createPinStyle(posY, posX)}
      zDepth={4}
      circle={true} />
    ))();

    const newPrimaryBtn = (() => (
      <RaisedButton
      label='Add Note'
      primary={true}
      style={btnStyle}
      onClick={this.createNote}/>
    ))();

    const newSecondaryBtn = (() => (
      <RaisedButton
      label='Cancel'
      secondary={true}
      style={btnStyle}
      onClick={this.cancelNote}/>
    ))();

    const newSlider = (() => (
      <Slider
      step={1}
      min={2}
      max={10}
      value={this.state.sliderValue}
      onChange={this.handleSlider}
      />
    ))();

    const newBtnField = React.createElement('div', {style: btnFieldStyle}, newPrimaryBtn, newSecondaryBtn);
    const newNoteBtn = React.createElement('button', null);
    const newNote = React.createElement('div', createNoteProps(posY, posX), newTextarea, newSlider, newBtnField);
    this.setState({newPin, newNote});
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSlider(e, value) {
    this.setState({sliderValue: value});
  }

  createNote() {
    this.setState({newPin: null, newNote: null, noteText: ""});
  }

  cancelNote() {
    this.setState({newPin: null, newNote: null});
  }

  renderOverlay(opts) {
    const {height, width} = opts;
    return (
      <div className='video-overlay'
        style={{height, width}}
        tabIndex="-1"
        onClick={this.addNote}
        onKeyPress={this.changeVideoStatus}>
      </div>
    );
  }

  render() {
    const {book} = this.props;
    const {newPin, newNote} = this.state;
    const opts = {
      height: '485',
      width: '800',
      playerVars: {
        controls: 0
      }
    };
    return (
    <div className="video-frame">
      {this.renderVideo(book, opts)}
      {this.renderOverlay(opts)}
      {newPin}
      {newNote}
    </div>
    );
  }
}

export default Panel;
