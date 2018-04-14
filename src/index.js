import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root')
);
