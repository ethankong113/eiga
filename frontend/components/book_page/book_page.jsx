import React from 'react';
import ShareBar from '../share_bar/share_bar';
import PanelContainer from '../panel/panel_container';

const BookPage = props => {
  const {url} = props.params;
  return (
    <div>
      <PanelContainer url={url}/>
    </div>
  );
};

export default BookPage;
