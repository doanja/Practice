import React from 'react';
import Navbar from '../layouts/Navbar';
import Jumbotron from '../layouts/Jumbotron';

import Footer from '../layouts/Footer';

export default function Discover() {
  return (
    <div>
      <div className='container-fluid'>
        <Navbar />
        <Jumbotron />

        <Footer />
      </div>
    </div>
  );
}
