import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

// needed to access state from redux
const mapStateToProps = state => {
  return {
    // maps numOfCakes from redux to numOfCake
    numOfCakes: state.cake.numOfCakes
  };
};

// needed to map action creators to a prop
const mapDispatchToProps = dispatch => {
  return {
    // maps buyCake() to buyCake
    buyCake: number => dispatch(buyCake(number))
  };
};

// use connect to connect the react component to redux
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
