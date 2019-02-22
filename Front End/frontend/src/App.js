import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GETbutton from './GETbutton';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div><GETbutton/></div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
      </div>
      
      
    );
  }
}

export default App;
