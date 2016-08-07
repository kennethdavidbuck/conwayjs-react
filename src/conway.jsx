import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';

// shims and polyfills
import values from 'object.values';
values.shim();

import entries from 'object.entries';
entries.shim();

const mainContainer = document.querySelector('.main-container');
ReactDOM.render(<App/>, mainContainer);