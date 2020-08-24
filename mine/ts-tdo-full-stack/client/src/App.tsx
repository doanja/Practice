import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { TodoHome, Login, Signup, PageNotFound } from './containers/';
import { CustomModal } from './components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './redux/Store';
import { toggleModal } from './redux/actions/modalActions';

const App: React.FC = () => {
  // redux
  const { showModal, errorText } = useSelector((state: RootStore) => state.modal);
  const dispatch = useDispatch();

  // modal
  // const [errorText, setErrorText] = useState<string>();
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal: ToggleModal = (errorText: string = '') => {
  //   dispatch(setErrorText(errorText));
  //   dispatch(setModalState(!showModal));
  // };

  return (
    <div className='wrap'>
      <Container>
        <CustomModal
          showModal={showModal}
          toggleModal={() => dispatch(toggleModal(!showModal, errorText))}
          title={'Error in Form'}
          body={<p>{errorText}</p>}
        />
        <Router>
          <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/todo' component={TodoHome} />
            <Route exact path='/login' component={Login} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
