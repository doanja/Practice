import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    addTodo(text);

    setText('');
  };

  return (
    <form>
      <input type='text' name='name' value={text} onChange={handleChange} />
      <input type='submit' value='Add Todo' onClick={handleSubmit} />
    </form>
  );
};
