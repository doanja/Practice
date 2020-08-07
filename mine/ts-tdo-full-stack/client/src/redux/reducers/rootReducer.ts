import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
// import { InventoryReducer } from './inventoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todoList: todoReducer,
  // inventory: InventoryReducer,
});

export default rootReducer;
