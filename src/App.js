import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';
import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Julia!!!!</h2>
          <TextField placeholder="Cool"/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Image link="https://item1.tradesy.com/images/homepage/e10642c5-e24c-bcc5-f680-3cf014a39c22_web%20%2815%29-retina@2x.jpg" alt="image1"/>
      </div>
    );
  }
}

export default App;
