import React, { ChangeEvent } from 'react';
import { TextField } from './TextField';
import { Counter } from './Counter';

const App: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {/* <TextField
        text='hello'
        person={{ firstName: '', lastName: '' }}
        handleChange={handleChange}
      /> */}
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
