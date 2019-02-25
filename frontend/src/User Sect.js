import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class UserSect extends Login {

    constructor (props){
        super(props);
        this.state = {
            value : ''
        };
    }
    
    render() {
        return (
            <p>{this.state.value}</p>

        );
    }
}

export default UserSect;