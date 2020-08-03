import { AuthState, AuthActionTypes, SET_LOGIN_STATUS, CLEAR_LOGIN_STATUS, SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN } from '../types/authTypes';

const initialState: AuthState = {
  loginStatus: false,
  authToken: '',
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, loginStatus: action.payload };
    case CLEAR_LOGIN_STATUS:
      return { ...state, loginStatus: false };
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload };
    case CLEAR_AUTH_TOKEN:
      return { ...state, authToken: '' };
    default:
      return state;
  }
};

export default authReducer;
