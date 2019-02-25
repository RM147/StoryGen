import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CreatePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            data: ''
        };
    }

    addWord = () => {
        axios.post(`http://localhost:8080/StoryGen/api/word/addWord`,{
            
                "word": "Daemon",
                "category": "Person",
                "genre": "Fantasy"            
        })
        .then(r => this.setState({ data: r.data }))
        .catch(e => console.log(e));
        
    }

    render() {
        return (
            <div>
            <p>Type your word in the box and pick it's word type and genre from the menus.</p>
            <button onClick={this.addWord}>Make Word</button>
            <p>{this.state.data}</p>
            </div>

        );
    }
}

export default CreatePage;