import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={ (e)=>console.log(e) }>Log in</button>
        </div>
        <p className="App-intro">
          Pair with other people at the company to learn about their job!
        </p>
        <p className="App-intro">
          Engineers learn about design, sales, comm, marketing!
         </p>
         <p className="App-intro">
          Sales learn about product, engineering, design, marketing!
         </p>
         <p className="App-intro">
           Learn from other at the company
         </p>
         <p className="App-intro">
           When: Every Friday @ Lunchtime
         </p>
      </div>
    );
  }
}

export default App;
