import React from 'react';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakecontainer from './components/NewCakecontainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <NewCakecontainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
