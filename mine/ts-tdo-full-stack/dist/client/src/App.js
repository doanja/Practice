"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
const TodoForm_1 = __importDefault(require("./components/TodoForm"));
const uuidv4_1 = require("uuidv4");
const react_bootstrap_1 = require("react-bootstrap");
require("./styles/App.css");
const App = ({}) => {
    const [todos, setTodos] = react_1.useState([
        { id: uuidv4_1.uuid(), text: 'wash car', done: false },
        { id: uuidv4_1.uuid(), text: 'wash clothes', done: false },
        { id: uuidv4_1.uuid(), text: 'wash wash dishes', done: false },
    ]);
    const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));
    const toggleTodo = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        }));
    };
    const addTodo = text => setTodos([...todos, { id: uuidv4_1.uuid(), text, done: false }]);
    return (<react_bootstrap_1.Container>
      <h1 className='text-center'>To Do List</h1>
      <TodoForm_1.default addTodo={addTodo}/>

      <hr />
      <TodoList_1.default todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </react_bootstrap_1.Container>);
};
exports.default = App;
