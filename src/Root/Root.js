import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory as history, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import rootSaga from './rootSaga';
import routes from './routes';

import '../../node_modules/grommet/grommet.min.css';

const store = configureStore({ history });

const syncedHistory = syncHistoryWithStore(history, store);

store.runSaga(rootSaga);

export default function Root() {
  return (
    <Provider store={store}>
      <Router history={syncedHistory} routes={routes} />
    </Provider>
  );
}
