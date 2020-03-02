import React from 'react';

function JSXVariables() {
  const name = 'John';
  const num1 = 4;
  const num2 = 'is cool';

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='jumbotron'>
          <h1>Hi! My name is (name)</h1>
          <h2>My name has (num1) letters</h2>
          <h2>I think React (inum2)</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
