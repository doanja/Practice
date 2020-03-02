import { INCREMENT, DECREMENT } from './types';

export const incrementCounter = () => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: 1
  });
};

export const decrementCounter = () => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: -1
  });
};
