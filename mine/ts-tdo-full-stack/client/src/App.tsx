import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { TodoHome, Login, Signup } from './containers/';

const App: React.FC = () => {
  return (
    <div className='wrap'>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/todo' component={TodoHome} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
