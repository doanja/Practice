import React, { Component } from 'react';

export default class jumbotron extends Component {
  render() {
    return (
      <div className='jumbotron jumbotron-fluid text-center'>
        <div className='container'>
          <h1 className='display-4'>Pupster</h1>
          <p className='lead'>They're the Good Boys and Girls</p>
        </div>
      </div>
    );
  }
}
