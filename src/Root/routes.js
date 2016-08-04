import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AuthContainer from '../Auth/AuthContainer';
import LandingPage from './LandingPage';

export default (
  <Route path="/" component={AuthContainer}>
    <IndexRoute component={LandingPage} />
    <Route path="*" component={LandingPage} />
  </Route>
);

