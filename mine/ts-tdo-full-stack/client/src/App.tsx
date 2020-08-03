import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './styles/App.css';

import { TodoHome, Login, Signup } from './containers/';

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route exact path='/todo' component={TodoHome} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
