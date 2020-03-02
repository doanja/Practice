import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    title: ""
  };

  onAdd = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  textChanged = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <input
            className="form-control"
            value={this.state.title}
            onChange={e => this.textChanged(e)}
          />
          <button className="btn btn-secondary" onClick={this.onAdd}>
            Add Item
          </button>
        </div>
      </React.Fragment>
    );
  }
}
