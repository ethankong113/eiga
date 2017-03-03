import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import {withRouter} from 'react-router';

class ShareBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap() {
    this.setState({open: true});
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  render() {
    const {url} = this.props;
    return (
       <div className="share-bar">
         <span>Share This:&nbsp;</span>
         <FlatButton label={url} primary={true}
           onTouchTap={this.handleTouchTap} />
           <Snackbar
            open={this.state.open}
            message="Link Copied to Your Clipboard"
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose}
          />
       </div>
    );
  }
}

export default withRouter(ShareBar);
