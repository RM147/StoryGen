import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class DeletePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            data: ''
        };
    }

    changeValue = (e) => {
        this.setState({value: e.target.value});
        
    }

    deleteWord = () => {
        axios.delete(`http://localhost:8080/StoryGen/api/word/deleteWord/${this.state.value}`)
        .then(r => this.setState({ data: r.data }))
        .catch(e => console.log(e));
        
    }

    render() {
        return (
            <div>
                <table></table>
                <p>Type a number to delete a word</p>
                <input className="input" type="text" onChange={this.changeValue}/>
                <button className="dropbtn" onClick={this.deleteWord}>Delete</button>
                <p>{this.state.data}</p>
                
            </div>

        );
    }
}

export default DeletePage;