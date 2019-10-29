import React, { Component } from 'react'; //irmc

// sateless functional component (use this functions instead of class when creating stateless components)
const NavBar = ({ totalCounters }) => {
  // must past in props and change {this.props.totalCounters} to {props.totalCounters}
  return (
    // rename class to className
    <nav className='navbar navbar-light bg-light'>
      <a href='' className='nav-brand'>
        <span className='badge pill badge-secondary'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
