import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

export default class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">To-Do-List</h1>
        <TodoAdd addTodo={this.props.addTodo} />
        <hr />

        {this.props.todos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todo={todoItem}
            deleteTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
          />
        ))}
      </React.Fragment>
    );
  }
}
