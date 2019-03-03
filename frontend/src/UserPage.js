import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            data: ''
        };
    }

    changeUser = (e) => {
        this.setState({ user: e.target.value });

    }

    changePass = (e) => {
        this.setState({ pass: e.target.value });

    }

    addUser = () => {
        axios.post(`http://localhost:8080/StoryGen/api/users/addUser`, {
            "username": this.state.user,
            "secretCode": this.state.pass
        }
        )
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
        console.log(this.state.data);

    }

    getUser = () => {
        axios.get(`http://localhost:8080/StoryGen/api/users/getUser/1`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
        console.log(this.state.data.username);

    }

    updateUser = () => {
        axios.put(`http://localhost:8080/StoryGen/api/users/updateUser/3`,

            "pass"
        )
            .then(r => this.setState({ data: r.data }))
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
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="3">
                            <div><label htmlFor="name">Username: </label>
                                <input id="name" type="text" onChange={this.changeUser} /></div>
                            <div><label htmlFor="pass">Password: </label>
                                <input id="pass" type="text" onChange={this.changePass} /></div>
                                <br/>
                            <button onClick={this.addUser} className="CRUD">Sign Up</button></td>
                        <td colSpan="3"><div><label htmlFor="name">Username: </label>
                            <input id="name" type="text" onChange={this.changeUser} /></div>
                            <div><label htmlFor="pass">Password: </label>
                                <input id="pass" type="text" onChange={this.changePass} /></div>
                                <br/>
                            <button onClick={this.addUser} className="CRUD">Login</button></td>

                    </tr>
                    <tr>
                        <td colSpan="2"><button onClick={this.getUser} className="CRUD">See Details</button></td>
                        <td colSpan="2"><button onClick={this.updateUser} className="CRUD">Update User</button></td>
                        <td colSpan="2"><button onClick={this.deleteUser} className="CRUD">Delete User</button></td>

                    </tr>
                    <tr>
                        <td colSpan="6"><input type="text" onChange={this.changeValue} />
                            <button onClick={this.getWord}>Get Word</button>
                            <p>{this.state.user}</p>
                            <p>{this.state.pass}</p></td>

                    </tr>
                    </tbody>

                </table>




            </div>


        );
    }
}

export default UserPage;