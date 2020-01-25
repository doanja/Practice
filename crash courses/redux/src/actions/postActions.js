import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch({
        type: 'FETCH_POSTS',
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
      dispatch({
        type: 'NEW_POST',
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);
    });
};

export const deletePost = postId => dispatch => {
  console.log('postId', postId);
  dispatch({
    type: 'DELETE_POST',
    payload: postId
  });
};
