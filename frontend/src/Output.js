import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Output extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Your Random Story Here',
            genre: "All"
        };
    }

    makeFantasy = () => {
        this.setState({ genre: "Fantasy" })
    }

    makeHorror = () => {
        this.setState({ genre: "Horror" })
    }

    makeScifi = () => {
        this.setState({ genre: "Scifi" })
    }

    genStory = () => {
        axios.get(`http://localhost:8080/StoryGen/api/word/storygen/${this.state.genre}`)
            .then(r => this.setState({ value: r.data }))
            .catch(e => console.log(e));
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <table></table>
                <p>{this.state.value}</p>
                <button onClick={this.genStory}>Gen Story</button>

                <div className="dropdown">
                    <button className="dropbtn">Set Genre</button>
                    <div className="dropdown-content">
                        <button onClick={this.makeFantasy}>Fantasy</button>
                        <button onClick={this.makeHorror}>Horror</button>
                        <button onClick={this.makeScifi}>Scifi</button>
                    </div>
                </div>

                <p>Genre will be {this.state.genre}</p>
            </div>




        );
    }
}

export default Output;