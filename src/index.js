/* eslint global-require: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import rootSaga from './Root/rootSaga';

import configureStore from './store/configureStore';
import Root from './Root/Root';

import '../node_modules/grommet/grommet.min.css';

const store = configureStore({ history });

const syncedHistory = syncHistoryWithStore(history, store);

const rootElement = document.getElementById('root');

store.runSaga(rootSaga);

render((
  <AppContainer>
    <Root store={store} history={syncedHistory} />
  </AppContainer>
  ), rootElement,
);

if (module.hot) {
  module.hot.accept('./Root/Root', () => {
    const NextApp = require('./Root/Root').default;

    render((
      <AppContainer>
        <NextApp store={store} history={syncedHistory} />
      </AppContainer>
      ), rootElement,
    );
  });
}
