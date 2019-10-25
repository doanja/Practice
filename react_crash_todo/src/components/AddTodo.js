import React, { Component } from 'react';
import { exportDefaultDeclaration } from '@babel/types';

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input type='text' style={{ flex: '10', padding: '5px' }} placeholder='Add Todo ...'></input>

        <input type='submit' value='Submit' className='btn' style={{ flex: '1' }}></input>
      </form>
    );
  }
}

export default AddTodo;
