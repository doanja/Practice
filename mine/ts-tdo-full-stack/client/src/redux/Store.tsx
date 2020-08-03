import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

function saveToLocalStorage(store: any) {
  console.log('save to local storage');
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem('store', serializedStore);
  } catch (err) {
    console.log('Error saving to local storage in store:', err);
  }
}

function loadFromLocalStorage() {
  console.log('load from local storage');
  try {
    const serializedStore = localStorage.getItem('store');

    if (!serializedStore) return undefined;

    const token = JSON.parse(serializedStore).auth.authToken;

    token ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`) : (axios.defaults.headers.common.Authorization = '');

    return JSON.parse(serializedStore);
  } catch (err) {
    console.log('Error loading from local storage in store:', err);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const Store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

Store.subscribe(() => {
  console.log('------------store subscribing---------');
  saveToLocalStorage(Store.getState());
});

export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
