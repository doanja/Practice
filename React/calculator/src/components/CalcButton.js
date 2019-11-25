import React, { Component } from 'react';
import './CalcButton.css';

export default class CalcButton extends Component {
  isOperator = val => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  // getValue = () => {
  //   console.log(this.props.children);
  // };

  render() {
    return (
      <div
        className={`button ${this.isOperator(this.props.children) ? '' : 'operator'}`}
        onClick={() => this.props.handleClick(this.props.children)}>
        {this.props.children}
      </div>
    );
  }
}
