import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='mt-3'>
        <Form.Control type='text' placeholder='Enter a todo' value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
        <InputGroup.Append>
          <Button variant='dark' type='submit' onClick={handleSubmit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
