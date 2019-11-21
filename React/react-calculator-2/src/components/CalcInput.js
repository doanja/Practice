import React, { Component } from 'react';

export default class CalcInput extends Component {
  render() {
    return (
      <div style={inputStyle} className='input'>
        {' '}
        {this.props.updateinput}
      </div>
    );
  }
}

const inputStyle = {
  display: 'flex',
  flex: '1',
  height: '4em',
  padding: '0.5em',
  backgroundColor: '#000',
  outline: '1px solid #000',
  fontWeight: 'bold',
  fontSize: '2.4em'
};
