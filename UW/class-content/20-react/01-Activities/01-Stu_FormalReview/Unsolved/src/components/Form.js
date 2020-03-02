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
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!this.state.firstName) {
      alert('fill out your first and last name');
    } else {
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      this.setState({
        firstName: '',
        lastName: ''
      });
    }
  };

  render() {
    return (
      <form className='form'>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input type='text' placeholder='Username' name='username' onChange={this.handleChange} />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={this.handleChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
