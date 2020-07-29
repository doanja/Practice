import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import Store from './redux/Store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
