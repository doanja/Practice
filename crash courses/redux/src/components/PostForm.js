import React, { Component } from 'react';
import axios from 'axios';

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = { title: this.state.title, body: this.state.body };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { post })
      .then(res => {
        console.log('res.data', res.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title: </label>
            <br />
            <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          </div>

          <br />

          <div>
            <label htmlFor='body'>Body: </label>
            <br />
            <textarea name='body' value={this.state.body} onChange={this.handleChange} />
          </div>

          <hr />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
