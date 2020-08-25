import {
  AuthState,
  AuthActionTypes,
  SET_LOGIN_STATUS,
  CLEAR_LOGIN_STATUS,
  SET_ACCESS_TOKEN,
  CLEAR_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  CLEAR_REFRESH_TOKEN,
} from '../types/authTypes';

const initialState: AuthState = {
  loginStatus: false,
  accessToken: '',
  refreshToken: '',
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, loginStatus: action.payload };
    case CLEAR_LOGIN_STATUS:
      return { ...state, loginStatus: false };
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case CLEAR_ACCESS_TOKEN:
      return { ...state, accessToken: '' };
    case SET_REFRESH_TOKEN:
      return { ...state, refreshToken: action.payload };
    case CLEAR_REFRESH_TOKEN:
      return { ...state, refreshToken: '' };
    default:
      return state;
  }
};

export default authReducer;
