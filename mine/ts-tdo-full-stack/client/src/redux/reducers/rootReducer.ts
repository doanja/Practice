import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todoList: todoReducer,
  modal: modalReducer,
});

export default rootReducer;
