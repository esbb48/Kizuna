import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as Hot } from 'react-hot-loader';

import RootRender from '../src';

const render = () => {
    ReactDOM.render(
        <Hot><RootRender /></Hot>,
        document.querySelector('root'),
    );
};

render();

module.hot.accept('../src', render);
