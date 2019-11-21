import React, { Component } from 'react';

export default class LoadButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button className='btn btn-primary mb-5 mr-2' onClick={this.props.loadPrev}>
          Prev
        </button>
        <button className='btn btn-primary mb-5' onClick={this.props.loadNext}>
          Next
        </button>
      </React.Fragment>
    );
  }
}
