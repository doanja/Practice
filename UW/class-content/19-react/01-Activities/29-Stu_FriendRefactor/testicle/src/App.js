import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    friends
  };

  deleteFriend = id => {
    this.setState({
      friends: this.state.friends.filter(friend => {
        return friend.id !== id;
      })
    });
  };

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Friends List</h1>

        {this.state.friends.map(friend => {
          return (
            <FriendCard
              key={friend.name}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              id={friend.id}
              deleteFriend={this.deleteFriend}
            />
          );
        })}
      </Wrapper>
    );
  }
}
