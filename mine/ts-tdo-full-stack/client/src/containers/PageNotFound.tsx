import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PageNotFound: React.FC = () => {
  return (
    <Container className='p-5 login text-center'>
      <h1>404</h1>
      <h3 className='pb-2 text-primary'>Page not Found</h3>
      <p className='text-light' style={{ textAlign: 'center' }}>
        <Link to='/'>Go to Home </Link>
      </p>
    </Container>
  );
};

export default PageNotFound;
