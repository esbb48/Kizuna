import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppContainer from '../App/AppContainer';
import LoginPage from '../Auth/LoginPage';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';

function checkAuth(nextState, replace) {
  const { pathname } = nextState.location;
  const islogged = false;
  if (islogged && pathname === '/login') {
    replace('/');
  } else if (!islogged && pathname !== '/login') {
    replace('/login');
  }
}

export default (
  <Route component={AppContainer} >
    <Route path="/" onEnter={checkAuth}>
      <IndexRoute component={LandingPage} />
      <Route path="/login" component={LoginPage} />
    </Route>
    <Route path="*" component={ErrorPage} />
  </Route>
);

