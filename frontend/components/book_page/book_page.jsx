import React from 'react';
import ShareBar from '../share_bar/share_bar';
import YoutubeFrame from 'react-youtube';
import PanelContainer from '../panel/panel_container';
import CommentTableContainer from '../comment/comment_table_container';
import { isNull } from 'lodash';
import { playerStates } from '../../utils/settings';

class BookPage extends React.Component {

  constructor(props) {
    super(props);
    this.videoTarget = null;
    this.videoStatus = 'loading'; //loading, ready, playing, paused, error
    this.playVideo = this.playVideo.bind(this);
    this.videoReady = this.videoReady.bind(this);
    this.videoStateChange = this.videoStateChange.bind(this);
    this.seekTo = this.seekTo.bind(this);
    this.getVideoTime = this.getVideoTime.bind(this);
    this.getVideoStatus = this.getVideoStatus.bind(this);
  }

  playVideo(option = null) {
    const {videoStatus, videoTarget} = this;
    if (option === 'play' || (isNull(option) && (videoStatus === 'ready' || videoStatus === 'paused'))) {
      this.videoStatus = 'playing';
      return videoTarget.playVideo();
    } else if (option === 'pause' || (isNull(option) && videoStatus === 'playing')) {
      this.videoStatus = 'paused';
      return videoTarget.pauseVideo();
    }
  }

  videoReady(e) {
    this.videoStatus = 'ready';
    this.videoTarget = e.target;
  }

  videoStateChange(e) {
    this.videoStatus = playerStates[e.target.getPlayerState()];
  }

  seekTo(time) {
    return e => {
      const {videoStatus, videoTarget} = this;
      if (videoStatus === 'ready') {
        const rebootVideo = times => {
          setTimeout(()=>{
            if (times >= 5) return -1;
            let status = this.videoTarget.getPlayerState();
            if (status === 1) {
              this.videoStatus = 'playing';
              videoTarget.seekTo(time);
            } else {
              rebootVideo(times + 1);
            }
          }, 1000);
        };
        videoTarget.playVideo();
        rebootVideo(0);
      } else {
        videoTarget.seekTo(time);
      }
    };
  }

  getVideoStatus() {
    return this.videoStatus;
  }

  getVideoTime() {
    return this.videoTarget.getCurrentTime();
  }

  render() {
    const {url} = this.props.params;
    const {playVideo, videoReady, videoStateChange, getVideoTime, getVideoStatus, seekTo} = this;
    return (
      <div className="book-page">
        <div className="main-control">
          <PanelContainer
            url={url}
            playVideo={playVideo}
            videoReady={videoReady}
            videoStateChange={videoStateChange}
            videoStatus={this.videoStatus}
            getVideoStatus={getVideoStatus}
            getVideoTime={getVideoTime}/>
          <CommentTableContainer
            url={url}
            seekTo={seekTo}/>
        </div>
      </div>
    );
  }
}

export default BookPage;
