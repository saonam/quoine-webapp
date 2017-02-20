import '@quoine/styles/reset.css';
import '@quoine/styles/base.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Router from 'components/Router';
import store from 'states/store';

window.store = store;

// const Router = () => null;

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
