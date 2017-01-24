import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import HomePage from './home_page/home_page';
import BookPage from './book_page/book_page';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Router path="/book/:url" component={BookPage} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
