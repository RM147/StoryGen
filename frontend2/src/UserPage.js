import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: ''
        };
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    getWord = () => {
        axios.get(`http://localhost:8080/StoryGen/api/word/getWord/${this.state.value}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

    }

    render() {
        return (
            <div>
                <p>Sign In</p>
                <p>Login</p>
                <p>See details</p>
                <p>Update</p>
                <p>Delete</p>
                <input type="text" onChange={this.changeValue} />
                <button onClick={this.getWord}>Get Word</button>
                <p>{this.state.data.word}</p>
                <p>{this.state.data.genre}</p>
            </div>


        );
    }
}

export default UserPage;