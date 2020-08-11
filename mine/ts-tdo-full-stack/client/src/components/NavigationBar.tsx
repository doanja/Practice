import React from 'react';

import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export const NavigationBar: React.FC = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <FontAwesomeIcon icon={faPencilAlt} size='1x' /> Typescript To Do List
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <a href='/' onClick={() => console.log('TODO: delete LS data, and clear axios headers, redirect')}>
            Logout
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
