"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Todo = ({ todo, deleteTodo, toggleTodo }) => {
    return (<react_bootstrap_1.ListGroup.Item>
      <p className={todo.done ? 'todo done d-inline' : 'todo d-inline'} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </p>
      <span>
        <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTimes} size='1x' className='float-right icon' onClick={() => deleteTodo(todo.id)}/>
      </span>
    </react_bootstrap_1.ListGroup.Item>);
};
exports.default = Todo;
