import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Routing from './Router';

class App extends Component {
  render() {
    return (
      <div>
        <div className='grid-container'>
          <div className="Banner"><Banner/></div>
          <div className="Login"></div>
        </div>
        
        <Routing></Routing>
          
          
        
      </div>

    );
  }
}

export default App;
