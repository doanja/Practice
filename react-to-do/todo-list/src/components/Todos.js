// rcc
import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    // console.log(this.props.todo);

    return this.props.todo.map(element => <TodoItem key={element.id} todo={element}></TodoItem>);
  }
}
