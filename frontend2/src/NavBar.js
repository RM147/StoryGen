import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
        <div className="GridTwo">
            <div><button className="Nav">3</button></div>
            <div><button className="Nav">4</button></div>
            <div><button className="Nav">5</button></div>
            <div><button className="Nav">6</button></div>
            <div><button className="Nav">7</button></div>
        </div>
        

      
    );
  }
}

export default NavBar;