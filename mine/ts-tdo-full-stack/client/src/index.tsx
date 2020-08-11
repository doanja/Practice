import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './redux/Store';

// styles
import './styles/reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.min.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
