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
            console.log(this.state.data);

    }

    getUser = () => {
        axios.get(`http://localhost:8080/StoryGen/api/users/getUser/3`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
            console.log(this.state.data);

    }

    updateUser = () => {
        axios.put(`http://localhost:8080/StoryGen/api/users/updateUser/3`,
            
                "pass"
            )
            .then(r => this.setState({ data: r.data + "."}))
            .catch(e => console.error(e));
            console.log(this.state.data);

    }

    deleteUser = () => {
        axios.delete(`http://localhost:8080/StoryGen/api/users/deleteUser/3`)
        .then(r => this.setState({ data: r.data }))
        .catch(e => console.log(e));
        console.log(this.state.data);
        
    }

    render() {
        return (
            <div>
                <p>Sign In</p> <button onClick={this.addUser} className="CRUD">Make User</button>
                <p>Login</p>
                <p>See details</p> <button onClick={this.getUser} className="CRUD">See User</button>
                <p>Update</p> <button onClick={this.updateUser} className="CRUD">Update User</button>
                <p>Delete</p> <button onClick={this.deleteUser} className="CRUD">Delete User</button>
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