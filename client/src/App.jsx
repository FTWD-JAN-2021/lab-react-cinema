import React, { Component } from 'react';
import Home from './components/Home';

class App extends Component {
  render() {
    console.log('im in the frontend!')
    return (
      <div className='App'>
        <Home />
      </div>
    );
  }
}

export default App;
