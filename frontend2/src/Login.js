import React, { Component } from 'react';
import './App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    changeValue = (e) => {
        this.setState({value: e.target.value});
        
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeValue}/>
            <button>Click ME</button>
            <p>{this.state.value}</p>
            </div>
            

        );
    }
}

export default Login;