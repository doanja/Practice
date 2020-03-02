import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: '',
    lastName: '',
    password: ''
  };

  handleInputChange = event => {
    // Updating the input's state
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      alert('fill out your first and last name');
    } else if (this.state.password.trim().length < 6 && this.state.password.trim().length > 15) {
      alert('password must be more than 6 characters');
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
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className='form'>
          <input
            value={this.state.firstName}
            name='firstName'
            onChange={this.handleInputChange}
            type='text'
            placeholder='First Name'
          />
          <input
            value={this.state.lastName}
            name='lastName'
            onChange={this.handleInputChange}
            type='text'
            placeholder='Last Name'
          />
          <input
            value={this.state.password}
            name='password'
            onChange={this.handleInputChange}
            type='password'
            placeholder='Password'
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
