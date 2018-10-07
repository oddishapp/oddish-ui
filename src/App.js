import React, { Component } from 'react';
import logo from './images/oddish.png';
import './App.css';
import Input from "./Input"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            Emoji-only micro blogging
          </p>
          <Input/>
        </header>
      </div>
    );
  }
}

export default App;
