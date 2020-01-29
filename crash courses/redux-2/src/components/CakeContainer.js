import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// needed to access state from redux
const mapStateToProps = state => {
  return {
    // maps numOfCakes from redux to numOfCake
    numOfCakes: state.numOfCakes
  };
};

// needed to map action creators to a prop
const mapDispatchToProps = dispatch => {
  return {
    // maps buyCake() to buyCake
    buyCake: () => dispatch(buyCake())
  };
};

// use connect to connect the react component to redux
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
