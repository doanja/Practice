"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Todo_1 = __importDefault(require("./Todo"));
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (<react_bootstrap_1.ListGroup>
      {todos.map(todo => (<Todo_1.default key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>))}
    </react_bootstrap_1.ListGroup>);
};
exports.default = TodoList;
