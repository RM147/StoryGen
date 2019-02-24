import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UpdatePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            data: ''
        };
    }

    updateWord = () => {
        axios.put(`http://localhost:8080/StoryGen/api/word/updateWord/82`,{
            
                "genre": "Fantasy"            
        })
        .then(r => this.setState({ data: r.data }))
        .catch(e => console.log(e));
        
    }

    render() {
        return (
            <div>
                <p>Change a word's genre</p>
                <input type="text" onChange={this.changeValue}/>
                <button onClick={this.updateWord}>Get Word</button>
                <p>{this.state.data}</p>
            </div>

        );
    }
}

export default UpdatePage;