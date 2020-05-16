import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddtodoProps {
  addTodo: AddTodo;
}

export const Addtodo: React.FC<AddtodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    addTodo(newTodo);

    setNewTodo('');
  };

  return (
    <form>
      <input type='text' name='name' value={newTodo} onChange={handleChange} />

      <input type='submit' value='Add Todo' onClick={handleSubmit} />
    </form>
  );
};
