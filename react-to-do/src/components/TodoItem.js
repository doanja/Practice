import React, { Component } from 'react';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',

      // check to see if todo is completed  (yes => strike-through)
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type='checkbox' onChange={() => this.props.markComplete(id)} /> {this.props.todo.title}
      </div>
    );
  }
}
