import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppContainer from '../App/AppContainer';
import LoginPage from '../Auth/LoginPage';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LandingPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
