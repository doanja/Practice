import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
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

    // call createPosts from postActions.js
    this.props.createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
