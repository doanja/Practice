import React, { Component } from 'react';

export default class ClearButton extends Component {
  render() {
    return (
      <div style={buttonStyle} className='clear-btn' onClick={this.props.handleClick}>
        Clear
      </div>
    );
  }
}

const buttonStyle = {
  display: 'flex',
  flex: 'left',
  width: '100%',
  height: '2.5em',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'center',
  fontSize: '1.4em',
  outline: '1px solid #888',
  backgroundColor: '#c5c3cd'
};
