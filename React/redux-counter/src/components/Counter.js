import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

class Counter extends Component {
  componentDidMount() {
    console.log('this.props :', this.props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <div className='btn btn-primary' onClick={this.props.decrementCounter}>
          -
        </div>
        <div className='btn btn-primary' onClick={this.props.incrementCounter}>
          +
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter);
