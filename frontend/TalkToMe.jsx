import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
