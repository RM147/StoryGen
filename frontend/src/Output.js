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

    makeAll = () => {
        this.setState({ genre: "All" })
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
        axios.get(`http://34.76.106.13:8888/StoryGen/api/word/storygen/${this.state.genre}`)
            .then(r => this.setState({ value: r.data }))
            .catch(e => console.log(e));
        
    }

    render() {
        return (
            <div>
                <table className="out1">
                    <tbody>
                    <tr>
                        <td><p>{this.state.value}</p></td>
                        <td className="out2"><p className="Output2">Genre: {this.state.genre}</p></td>
                    </tr>
                    </tbody>
                </table>
                
                <button className="dropbtn" onClick={this.genStory}>Gen Story</button>
                <br/>

                <div className="dropdown">
                    <button className="dropbtn">Set Genre</button>
                    <div className="dropdown-content">
                    <button onClick={this.makeAll}>All</button>
                        <button onClick={this.makeFantasy}>Fantasy</button>
                        <button onClick={this.makeHorror}>Horror</button>
                        <button onClick={this.makeScifi}>Scifi</button>
                    </div>
                </div>

                
            </div>




        );
    }
}

export default Output;