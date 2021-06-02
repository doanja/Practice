import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DocTitleOne />
        <DocTitleTwo />
        <CounterOne />
      </header>
    </div>
  );
}

export default App;
