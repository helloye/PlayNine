import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Game from '../game/Game';

// Entry point for PlayNine app
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Play Nine</h2>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
