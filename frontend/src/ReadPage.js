import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class ReadPage extends Component {

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
        axios.get(`http://34.76.106.13:8888/StoryGen/api/word/getWord/${this.state.value}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

    }

    render() {
        return (
            <div>
                <div>
                    <table><tr><p className={"loginText" + this.props.loggedin}>LOGIN TO USE THIS FUNCTION! </p></tr></table>
                    <p>Type a number to get a word</p>
                    <input className="input" type="text" onChange={this.changeValue} />
                    <button className="dropbtn" onClick={this.getWord}>Get Word</button>
                    <p>Word: {this.state.data.word}</p>
                    <p>Genre: {this.state.data.genre}</p>

                </div>

            </div>



        );
    }
}

export default ReadPage;