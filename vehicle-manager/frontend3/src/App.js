import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Vechicle Management Dashboard</h1>
          <ul>
            <li><a> Home </a></li>
            <li><a> Vehicles </a></li>
            <li><a> Sales </a></li>
            <li><a> Customers </a></li>
          </ul>
        </header>
        <p className="App-intro">
          Mock monthly data goes here
          <br></br> high-level reports such as monthly customer acquisition, monthly revenue, monthly profits, etc.
        </p>
      </div>
    );
  }
}

export default App;
