import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    todos: [
      { id: uuid.v4(), task: "test", completed: false },
      { id: uuid.v4(), task: "test 2", completed: false }
    ]
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  editTodo = id => {
    console.log(`to do with id ${id} is being editted`);
  };

  addTodo = task => {
    const newTodo = {
      id: uuid.v4(),
      task,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="container">
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}
