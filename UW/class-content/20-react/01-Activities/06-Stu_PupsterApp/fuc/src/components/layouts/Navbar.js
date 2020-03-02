import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Pupster
        </a>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-item' to={`/`}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-item' to={`/discover`}>
              Discover
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-item' to={`/search`}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
