import React, { Component } from 'react';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  buttonStyle = () => {
    return {
      float: 'right'
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type='checkbox' onChange={() => this.props.toggleCheckbox(id)} />
        {title}
        <button style={this.buttonStyle()} onClick={() => this.props.deleteButton(id)}>
          delete
        </button>
      </div>
    );
  }
}
