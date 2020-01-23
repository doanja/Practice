import React, { Component } from 'react';
import axios from 'axios';

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
