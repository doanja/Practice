import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

// needed to access state from redux
const mapStateToProps = state => {
  return {
    // maps numOfIceCreamss from redux to numOfIceCreams
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

// needed to map action creators to a prop
const mapDispatchToProps = dispatch => {
  return {
    // maps buyIceCream() to buyIceCream
    buyIceCream: () => dispatch(buyIceCream())
  };
};

// use connect to connect the react component to redux
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
