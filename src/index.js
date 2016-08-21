/* eslint global-require: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import rootSaga from './Root/rootSaga';

import configureStore from './store/configureStore';
import RootApp from './Root/RootApp';

const store = configureStore({ history });

const syncedHistory = syncHistoryWithStore(history, store);

const rootElement = document.getElementById('root');

store.runSaga(rootSaga);

render((
  <AppContainer>
    <RootApp store={store} history={syncedHistory} />
  </AppContainer>
  ), rootElement
);

if (module.hot) {
  module.hot.accept('./Root/RootApp', () => {
    const NextApp = require('./Root/RootApp').default;

    render((
      <AppContainer>
        <NextApp store={store} history={syncedHistory} />
      </AppContainer>
      ), rootElement
    );
  });
}
