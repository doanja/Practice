import React, { useState, useCallback } from 'react';

function Callback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  // use the useCallback (takes a callback as the first argument, and the dependency as the second)
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  return <div>{/* pass incrementAge and incrementSalary to child components here */}</div>;
}

export default Callback;
