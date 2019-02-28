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

    addUser = () => {
        axios.post(`http://localhost:8080/StoryGen/api/users/addUser`, {
            "username": "John",
            "secretCode": "stuff"
        }
        )
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

    }

    getUser = () => {
        axios.get(`http://localhost:8080/StoryGen/api/word/getWord/1`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

    }

    updateUser = () => {
        axios.put(`http://localhost:8080/StoryGen/api/word/updateWord/1`,
            
                "pass"
            )
            .then(r => this.setState({ data: r.data + this.state.genre +"."}))
            .catch(e => console.log(e));

    }

    render() {
        return (
            <div>
                <p>Sign In</p> <button onClick={this.addUser}>Make User</button>
                <p>Login</p>
                <p>See details</p> <button onClick={this.getUser}>Make User</button>
                <p>Update</p> <button onClick={this.updateUser}>Update User</button>
                <p>Delete</p> <button onClick={this.getUser}>Delete User</button>
                <br/>
                <input type="text" onChange={this.changeValue} />
                <button onClick={this.getWord}>Get Word</button>
                <p>{this.state.data.word}</p>
                <p>{this.state.data.genre}</p>
            </div>


        );
    }
}

export default UserPage;