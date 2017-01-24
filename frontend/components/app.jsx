import React from 'react';
import Material from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './header/header';

const App = (props) => {
  return (
    <Material muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Header />
        {props.children}
      </div>
    </Material>
  );
};

export default App;
