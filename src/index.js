/* eslint global-require: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootSaga from './Root/rootSaga';

import configureStore from './store/configureStore';
import Root from './Root/Root';

import '../node_modules/grommet/grommet.min.css';

const store = configureStore({ history });

const syncedHistory = syncHistoryWithStore(history, store);

const rootElement = document.getElementById('root');

store.runSaga(rootSaga);

export default render(
  <Root store={store} history={syncedHistory} />,
  rootElement,
);
