import React, { useState, useMemo } from 'react';

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) {
      return counterOne % 2 === 0;
    }
  }, [counterOne]);

  return <div></div>;
}

export default MemoCounter;
