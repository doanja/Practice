import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todo extends Component {
  render() {
    // console.log(this.props);

    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggleCheckbox={this.props.toggleCheckbox} deleteButton={this.props.deleteButton} />
    ));
  }
}
