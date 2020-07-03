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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const TodoForm = ({ addTodo }) => {
    const [text, setText] = react_1.useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };
    return (<react_bootstrap_1.Form onSubmit={handleSubmit}>
      <react_bootstrap_1.InputGroup className='mt-3'>
        <react_bootstrap_1.Form.Control type='text' placeholder='Enter a todo' value={text} onChange={(e) => handleChange(e)}/>
        <react_bootstrap_1.InputGroup.Append>
          <react_bootstrap_1.Button variant='dark' type='submit' onClick={handleSubmit}>
            Add Todo
          </react_bootstrap_1.Button>
        </react_bootstrap_1.InputGroup.Append>
      </react_bootstrap_1.InputGroup>
    </react_bootstrap_1.Form>);
};
exports.default = TodoForm;
