import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/containers/About';
import Discover from './components/containers/Discover';
import Search from './components/containers/Search';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={About} />
        <Route exact path='/discover' component={Discover} />
        <Route exact path='/search' component={Search} />
      </React.Fragment>
    </Router>
  );
}

export default App;
