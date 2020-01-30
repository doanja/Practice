import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className='App'>
      <HookTimer />
    </div>
  );
}

export default App;
