import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AuthContainer from '../Auth/AuthContainer';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';

export default (
  <Route path="/" component={AuthContainer}>
    <Route path="home" component={LandingPage} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
