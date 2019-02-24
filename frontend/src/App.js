import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Login from './Login';
import Routing from './Router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <body>
        <div className='grid-container'>
          <div className="Banner"><Banner/></div>
          <div className="Login"><Login /></div>
        </div>
        
        <Routing></Routing>
          
          
        
      </body>

    );
  }
}

export default App;
