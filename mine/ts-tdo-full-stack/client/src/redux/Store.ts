import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

const saveToLocalStorage = (store: { loginStatus: boolean; authToken: string }): void => {
  try {
    localStorage.setItem('store', JSON.stringify(store));
  } catch (err) {
    return undefined;
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedStore = localStorage.getItem('store');

    if (!serializedStore) return undefined;

    const token: string = JSON.parse(serializedStore).authToken;

    token ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`) : (axios.defaults.headers.common.Authorization = null);

    return { auth: JSON.parse(serializedStore) };
  } catch (err) {
    return undefined;
  }
};

const store = createStore(rootReducer, loadFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState().auth));

export type RootStore = ReturnType<typeof rootReducer>;

export default store;
