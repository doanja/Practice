import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // reason why counter.id is used twice, is because this is privated by react
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
