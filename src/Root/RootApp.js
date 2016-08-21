import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';


export default function RootApp({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

RootApp.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
