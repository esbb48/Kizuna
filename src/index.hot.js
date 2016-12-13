import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootRender from '../src';

const render = () => {
  ReactDOM.render((
      <AppContainer>
        <RootRender />
      </AppContainer>
    ),
    document.querySelector('root'),
  );
};

render();

module.hot.accept('../src', render);
