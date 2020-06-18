import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
