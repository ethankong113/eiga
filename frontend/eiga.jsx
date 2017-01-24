import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', e => {
   let container = document.getElementById("container");
   let store;
   store = configureStore();
   ReactDOM.render(<Root store={store} />, container);
   window.store = store;
 });
