import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const PageNotFound: React.FC = () => {
  return (
    <Modal className='text-center' show={true} backdrop={false} animation={false} centered>
      <Modal.Body className='py-5'>
        <h1>404</h1>
        <h2 className='pb-2 text-primary'>Page not Found</h2>
        <p>
          The page you are looking for doesn't exist.
          <br />
          Go back, or head over to <Link to='/'> Home</Link> to choose a new direction.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default PageNotFound;
