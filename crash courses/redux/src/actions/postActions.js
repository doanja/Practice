import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      // update state in store dispatch(action)
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);
    });
};

export const createPost = postData => dispatch => {
  axios
    .post('https://jsonplaceholder.typicode.com/posts', { postData })
    .then(res => {
      // update state in store dispatch(action)
      dispatch({
        type: NEW_POST,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);
    });
};

export const deletePost = postId => dispatch => {
  // update state in store dispatch(action)
  dispatch({
    type: DELETE_POST,
    payload: postId
  });
};
