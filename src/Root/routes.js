import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppContainer from '../App/AppContainer';
import LoginContainer from '../Auth/LoginContainer';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';

const checkAuth = ({ location: { pathname } }, replace, cb) => {
  const isAuthenticated = !!localStorage.getItem('KIZUNA_USERNAME');

  if (isAuthenticated && pathname === '/login') {
    replace('/');
    cb();
  } else if (!isAuthenticated && pathname !== '/login') {
    replace('/login');
    cb();
  } else if (isAuthenticated) {
    cb();
  } else {
    throw new Error('Impossible state, there must be a bug in the code.');
  }
};

export default (
  <Route component={AppContainer} >
    <Route path="/" onEnter={checkAuth}>
      <IndexRoute component={LandingPage} />
      <Route path="/login" component={LoginContainer} />
    </Route>
    <Route path="*" component={ErrorPage} />
  </Route>
);
