import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            value: 'default',
            data: '',


        };
    }

    changeUser = (e) => {
        this.setState({ user: e.target.value });

    }

    changePass = (e) => {
        this.setState({ pass: e.target.value });

    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    addUser = () => {

        this.props.idRaise();
        this.props.logIn();


        axios.post(`http://localhost:8080/StoryGen/api/users/addUser`, {
            "username": this.state.user,
            "secretCode": this.state.pass
        })
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));





    }

    getUser = () => {
        axios.get(`http://localhost:8080/StoryGen/api/users/getUser/${this.props.id}`)
            .then(r => this.setState({ data: "Username: " + r.data.username }))
            .catch(e => console.log(e));


    }

    updateUser = () => {
        axios.put(`http://localhost:8080/StoryGen/api/users/updateUser/${this.props.id}`,

            this.state.value
        )
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.error(e));


    }

    deleteUser = () => {

        this.props.logOut();

        axios.delete(`http://localhost:8080/StoryGen/api/users/deleteUser/${this.props.id}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
        this.setState({ loggedin: false })
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
                                    <input id="pass" type="password" onChange={this.changePass} /></div>
                                <br />
                                <button onClick={this.addUser} className="CRUD">Sign Up</button></td>
                        </tr>
                        <tr className="users2">
                            <td colSpan="2"><button disabled={!this.props.loggedin} onClick={this.getUser} className="CRUD">See Details</button></td>
                            <td colSpan="2"><input className="input" type="password" onChange={this.changeValue} disabled={!this.props.loggedin} />
                                <button disabled={!this.props.loggedin} onClick={this.updateUser} className="CRUD">Change Password</button></td>
                            <td colSpan="2"><button disabled={!this.props.loggedin} onClick={this.deleteUser} className="CRUD">Log out</button></td>

                        </tr>
                        <tr className="users2">
                            <td colSpan="6">
                                <p>{this.state.data}</p>


                            </td>

                        </tr>
                    </tbody>

                </table>

            </div>


        );
    }
}

export default UserPage;