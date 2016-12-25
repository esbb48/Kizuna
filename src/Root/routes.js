import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppContainer from '../App/AppContainer';
import LoginContainer from '../Auth/LoginContainer';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';
import { store } from './Root';

function checkAuth(nextState, replace) {
  const { pathname } = nextState.location;
  const { isAuthenticated } = store.getState().authModule;
  if (isAuthenticated && pathname === '/login') {
    replace('/');
  } else if (!isAuthenticated && pathname !== '/login') {
    replace('/login');
  }
}

export default (
  <Route component={AppContainer} >
    <Route path="/" onEnter={checkAuth}>
      <IndexRoute component={LandingPage} />
      <Route path="/login" component={LoginContainer} />
    </Route>
    <Route path="*" component={ErrorPage} />
  </Route>
);
