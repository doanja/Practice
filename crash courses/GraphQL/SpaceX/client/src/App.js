import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <div className='App'>
          <h1>spaceX</h1>
        </div>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
