import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

const saveToLocalStorage = (store: any): void => {
  try {
    const serializedStore = JSON.stringify(store);

    localStorage.setItem('store', serializedStore);
  } catch (err) {
    console.log('Error saving to local storage in store:', err);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedStore = localStorage.getItem('store');

    if (!serializedStore) return undefined;

    const token: string = JSON.parse(serializedStore).authToken;

    const auth = { auth: JSON.parse(serializedStore) };

    token ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`) : (axios.defaults.headers.common.Authorization = null);

    return auth;
  } catch (err) {
    console.log('Error loading from local storage in store:', err);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState().auth));

export type RootStore = ReturnType<typeof rootReducer>;

export default store;
