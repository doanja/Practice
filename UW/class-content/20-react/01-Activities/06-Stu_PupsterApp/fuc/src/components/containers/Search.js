import React from 'react';
import Navbar from '../layouts/Navbar';

import Footer from '../layouts/Footer';
import SearchBar from '../SearchComponents/SearchResultcontainer';

export default function Search() {
  return (
    <div>
      <div className='container-fluid'>
        <Navbar />
        <SearchBar />

        <Footer />
      </div>
    </div>
  );
}
