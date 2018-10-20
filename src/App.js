import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="icon" />
          <h1 className="App-title">Welcome to the push-notification demo !!</h1>
          <button onClick={askForPermissioToReceiveNotifications} >
            Click here to receive notifications
          </button>
        </header>
      </div>
    );
  }
}

export default App;
