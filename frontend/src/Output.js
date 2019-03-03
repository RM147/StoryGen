import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Output extends Component {

  constructor(props){
      super(props);
      this.state = {
          value: 'Your Random Story Here'
      };
  }

  genStory = () => {
    axios.get(`http://localhost:8080/StoryGen/api/word/storygen`)
        .then(r => this.setState({ value: r.data }))
        .catch(e => console.log(e));
    console.log(this.state.value);    
}

  render() {
    return (
        <div>
            <p>{this.state.value}</p>
            <button onClick={this.genStory}>Gen Story</button>
            
        </div>

        
        
      
    );
  }
}

export default Output;