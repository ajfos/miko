import React, { Component } from 'react';
import logo from './miko.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Miko's Jouralism of investigative fun!</h1>
        </header>
        <p className="App-intro">
          He just really wants to investigate.
        </p>
        <div className="AppMain">

        </div>
      </div>
    );
  }
}

export default App;
