/* eslint global-require: 0 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  const Root = require('./Root/Root').default;
  ReactDOM.render((
    <AppContainer>
      <Root />
    </AppContainer>
    ),
    document.getElementById('root'),
  );
};

render();

module.hot.accept('../src/index.hot.js', render);
