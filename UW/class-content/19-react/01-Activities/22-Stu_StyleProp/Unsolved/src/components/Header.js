import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6'
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px'
  }
};

function Header() {
  return (
    <header className='header' style={style}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
