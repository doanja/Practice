import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './styles/App.css';

import { TodoHome, Login, Signup } from './containers/';

// redux
// import { useSelector, useDispatch } from 'react-redux';
// import { RootStore } from './redux/Store';
// import {setLoginStatus} from './redux/actions/authActions';

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' component={TodoHome} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
