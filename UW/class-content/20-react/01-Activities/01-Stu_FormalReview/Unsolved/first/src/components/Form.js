import React, { Component } from 'react';

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = () => {
    console.log('sub');
    alert(`Hello ${this.state.username}, your password is ${this.state.password}`);
    this.setState({ username: '', password: '' });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input type='text' placeholder='Username' name='username' onChange={this.handleChange} />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
