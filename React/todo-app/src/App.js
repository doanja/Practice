import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todo';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do homework',
        completed: false
      },
      {
        id: 2,
        title: 'shower',
        completed: false
      },
      {
        id: 3,
        title: 'wash dishes',
        completed: false
      }
    ]
  };

  toggleCheckbox = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteButton = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  };

  render() {
    return (
      <div className='App'>
        <Todos todos={this.state.todos} toggleCheckbox={this.toggleCheckbox} deleteButton={this.deleteButton} />
      </div>
    );
  }
}
