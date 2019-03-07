import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            data: '',
            data2: '',
            loggedin: true,
            id: 1
        };
    }

    changeUser = (e) => {
        this.setState({ user: e.target.value });

    }

    changePass = (e) => {
        this.setState({ pass: e.target.value });

    }

    addUser = () => {

        this.setState({id: this.state.id+1})

        axios.post(`http://localhost:8080/StoryGen/api/users/addUser`, {
            "username": this.state.user,
            "secretCode": this.state.pass
        })
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

        this.setState({loggedin: false})    



    }

    getUser = () => {
        axios.get(`http://localhost:8080/StoryGen/api/users/getUser/${this.state.id}`)
            .then(r => this.setState({ data2: r.data }))
            .catch(e => console.log(e));


    }

    updateUser = () => {
        axios.put(`http://localhost:8080/StoryGen/api/users/updateUser/${this.state.id}`,

            "pass"
        )
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.error(e));


    }

    deleteUser = () => {
        axios.delete(`http://localhost:8080/StoryGen/api/users/deleteUser/${this.state.id}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));


    }

    render() {
        return (
            <div>
                <table className="users">
                    <tbody>
                        <tr className="users1">
                            <td colSpan="3">
                                <div><label htmlFor="name">Username: </label>
                                    <input id="name" type="text" onChange={this.changeUser} /></div>
                                <div><label htmlFor="pass">Password: </label>
                                    <input id="pass" type="text" onChange={this.changePass} /></div>
                                <br />
                                <button onClick={this.addUser} className="CRUD">Sign Up</button></td>
                        </tr>
                        <tr className="users1">
                            <td colSpan="2"><button disabled={this.state.loggedin} onClick={this.getUser} className="CRUD">See Details</button></td>
                            <td colSpan="2"><button disabled={this.state.loggedin} onClick={this.updateUser} className="CRUD">Update User</button></td>
                            <td colSpan="2"><button disabled={this.state.loggedin} onClick={this.deleteUser} className="CRUD">Delete User</button></td>

                        </tr>
                        <tr className="users1">
                            <td colSpan="6">
                                <p>{this.state.id}</p>
                                <p>{this.state.pass}</p>
                                <p>{this.state.data}</p>
                                <p>{this.state.data2.username}</p>
                                <p>{this.state.data2.secretCode}</p></td>

                        </tr>
                    </tbody>

                </table>

                




            </div>


        );
    }
}

export default UserPage;