import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p id="help" className="text-uppercase">Helpful notes will appear here</p>
          <p>E-mail: <input type="text" id="email" name="email" /></p>
          <p>Name: <input type="text" id="name" name="name" /></p>
          <p>Age: <input type="text" id="age" name="age" /></p>
        </header>
      </div>
    );
  }
}





export default App;
