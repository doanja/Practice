import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do homework',
        completed: false
      },
      {
        id: 2,
        title: 'update resume',
        completed: false
      },
      {
        id: 3,
        title: 'study react',
        completed: false
      }
    ]
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className='App'>
        <Todos todo={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
