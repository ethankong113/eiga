import React from 'react';
import {withRouter} from 'react-router';

class ShareBar extends React.Component {
  render() {
    const {url} = this.props;
    return (
       <div>
         <span>Share This:&nbsp;</span>
         <span>{`somelink.${url}`}</span>
       </div>
    );
  }
}

export default withRouter(ShareBar);
