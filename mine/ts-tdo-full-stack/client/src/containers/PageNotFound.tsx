import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const PageNotFound: React.FC = () => {
  return (
    <Modal show={true} className='text-center' centered>
      <Modal.Body className='py-5'>
        <h1>404</h1>
        <h2 className='pb-2 text-primary'>Page not Found</h2>
        <p className='text-light' style={{ textAlign: 'center' }}>
          <Link to='/'>Go to Home </Link>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default PageNotFound;
