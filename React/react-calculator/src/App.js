import React, { Component } from 'react';
import './App.css';
import CalcButton from './components/CalcButton.js';
import CalcInput from './components/CalcInput.js';
import ClearButton from './components/ClearButton';

export default class App extends Component {
  state = {
    input: '',
    previousOperand: '',
    currentOperand: '',
    operator: ''
  };

  updateInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  updateInputZero = val => {
    // if there a input is empty
    if (this.state.input !== '') {
      this.setState({ input: this.state.input + val });
    }
  };

  updateInputDecimal = val => {
    // if no decimal place
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: '', previousOperand: '', currentOperand: '', operator: '' });
  };

  addOperator = () => {
    this.setState({ previousOperand: this.state.input, input: '', operator: '+' });
  };

  subtractOperator = () => {
    this.setState({ previousOperand: this.state.input, input: '', operator: '-' });
  };

  multiplyOperator = () => {
    this.setState({ previousOperand: this.state.input, input: '', operator: '*' });
  };

  divideOperator = () => {
    this.setState({ previousOperand: this.state.input, input: '', operator: '/' });
  };

  calculateinput = () => {
    this.state.currentOperand = this.state.input;
    switch (this.state.operator) {
      case '+':
        this.setState({
          input: parseFloat(this.state.previousOperand) + parseFloat(this.state.currentOperand)
        });
        break;
      case '-':
        this.setState({
          input: parseFloat(this.state.previousOperand) - parseFloat(this.state.currentOperand)
        });
        break;
      case '*':
        this.setState({
          input: parseFloat(this.state.previousOperand) * parseFloat(this.state.currentOperand)
        });
        break;
      case '/':
        this.setState({
          input: parseFloat(this.state.previousOperand) / parseFloat(this.state.currentOperand)
        });
        break;
    }
  };

  render() {
    return (
      <div className='App'>
        <div className='calc-wrapper'>
          <div className='row'>
            <CalcInput updateinput={this.state.input} />
          </div>
          <div className='row'>
            <CalcButton handleClick={this.updateInput}>7</CalcButton>
            <CalcButton handleClick={this.updateInput}>8</CalcButton>
            <CalcButton handleClick={this.updateInput}>9</CalcButton>
            <CalcButton handleClick={this.divideOperator}>/</CalcButton>
          </div>
          <div className='row'>
            <CalcButton handleClick={this.updateInput}>4</CalcButton>
            <CalcButton handleClick={this.updateInput}>5</CalcButton>
            <CalcButton handleClick={this.updateInput}>6</CalcButton>
            <CalcButton handleClick={this.multiplyOperator}>*</CalcButton>
          </div>
          <div className='row'>
            <CalcButton handleClick={this.updateInput}>1</CalcButton>
            <CalcButton handleClick={this.updateInput}>2</CalcButton>
            <CalcButton handleClick={this.updateInput}>3</CalcButton>
            <CalcButton handleClick={this.addOperator}>+</CalcButton>
          </div>
          <div className='row'>
            <CalcButton handleClick={this.updateInputDecimal}>.</CalcButton>
            <CalcButton handleClick={this.updateInputZero}>0</CalcButton>
            <CalcButton handleClick={this.calculateinput}>=</CalcButton>
            <CalcButton handleClick={this.subtractOperator}>-</CalcButton>
          </div>
          <div className='row'>
            <ClearButton handleClick={this.clearInput} />
          </div>
        </div>
      </div>
    );
  }
}
