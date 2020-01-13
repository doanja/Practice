import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    // console.log(this.props);
    const { id, task } = this.props.todo;
    return (
      <div>
        <p className="d-inline">{task}</p>

        <button
          className="btn btn-danger float-right"
          onClick={() => this.props.deleteTodo(id)}
        >
          delete
        </button>

        <button
          className="btn btn-primary float-right mr-2"
          onClick={() => this.props.editTodo(id)}
        >
          edit
        </button>
        <hr />
      </div>
    );
  }
}
