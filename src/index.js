/* eslint global-require: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import rootSaga from './Root/rootSaga';

import configureStore from './store/configureStore';
import Root from './Root/RootContainer';

const store = configureStore({ history: browserHistory });

const history = syncHistoryWithStore(browserHistory, store);

const rootElement = document.getElementById('root');

store.runSaga(rootSaga);

render((
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>
  ), rootElement
);

if (module.hot) {
  module.hot.accept('./Root/RootContainer', () => {
    const NextApp = require('./Root/RootContainer').default;

    render((
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>
      ), rootElement
    );
  });
}
