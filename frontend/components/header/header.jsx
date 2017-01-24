import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = (props) => {
  return (
    <header>
      <AppBar title="EIGA"
        iconElementLeft={<div></div>}
        />
    </header>
  );
};

export default Header;
