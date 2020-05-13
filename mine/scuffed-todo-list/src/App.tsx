import React, { ChangeEvent } from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <TextField
        text='hello'
        person={{ firstName: '', lastName: '' }}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
