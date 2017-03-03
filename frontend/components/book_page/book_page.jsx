import React from 'react';
import ShareBar from '../share_bar/share_bar';
import PanelContainer from '../panel/panel_container';
import CommentTableContainer from '../comment/comment_table_container';

const BookPage = props => {
  const {url} = props.params;
  return (
    <div>
      <div className="main-control">
        <PanelContainer url={url}/>
        <CommentTableContainer url={url}/>
      </div>
    </div>
  );
};

export default BookPage;
