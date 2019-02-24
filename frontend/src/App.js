import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Login from './Login';
import StoryGen from './StoryGen';
import CreateButton from './CreateButton';
import ReadButton from './ReadButton';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

class App extends Component {
  render() {
    return (
      <body>
      <div className='grid-container'>
      <div className="Banner"><Banner/></div>
      <div className="Login"><Login/></div>
      <div><StoryGen/></div>
      <div><CreateButton/></div>
      <div><ReadButton/></div>
      <div><UpdateButton/></div>
      <div><DeleteButton/></div>
      <div className="Output">
      <p></p>
      <p>A Know It All Dragon Avenges a Rare Farmboy in a Forest of the Witch.</p>
      </div>
      </div>
      <div>Time</div>
      </body>
    );
  }
}

export default App;
