import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddtodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddtodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <form>
        <input type='text' value={newTodo} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>
          add todo
        </button>
      </form>
    </div>
  );
};
