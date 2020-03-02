import React from 'react';
import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  background: 'green',
  a: 'border 1px solid white'
};

function Navbar() {
  return (
    <nav className='navbar' style={styles}>
      <a href='/'>Welcome</a>
    </nav>
  );
}

export default Navbar;
