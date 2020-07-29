import { AuthState, AuthActionTypes, SET_LOGIN_STATUS } from '../types/authTypes';

const initialState: AuthState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};

export default authReducer;
