// rcc
import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    return this.props.todo.map(element => <TodoItem key={element.id} todo={element} markComplete={this.props.markComplete}></TodoItem>);
  }
}
