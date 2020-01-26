import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
