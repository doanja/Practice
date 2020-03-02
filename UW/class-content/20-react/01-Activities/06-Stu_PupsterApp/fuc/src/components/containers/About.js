import React from 'react';
import Navbar from '../layouts/Navbar';
import Jumbotron from '../layouts/Jumbotron';
import AboutMain from '../AboutMain';
import Footer from '../layouts/Footer';

export default function About() {
  return (
    <div>
      <div className='container-fluid'>
        <Navbar />
        <Jumbotron />
        <AboutMain />
        <Footer />
      </div>
    </div>
  );
}
