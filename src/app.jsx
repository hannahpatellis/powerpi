import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Config from './config.json';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const home = (
  <main>
    <h1>Hello</h1>
  </main>
);

root.render(home);