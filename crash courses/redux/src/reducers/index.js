import { combineReducers } from 'redux';
import postReducer from './postReudcer';

export default combineReducers({ posts: postReducer });
