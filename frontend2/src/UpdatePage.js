import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: '',
            genre: "Common"
        };
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    updateWord = () => {
        axios.put(`http://localhost:8080/StoryGen/api/word/updateWord/${this.state.value}`,
            
                this.state.genre
            )
            .then(r => this.setState({ data: r.data + this.state.genre +"."}))
            .catch(e => console.log(e));

    }

    makeFantasy = () =>{
        this.setState({genre: "Fantasy"})
    }

    makeHorror = () =>{
        this.setState({genre: "Horror"})
    }

    makeScifi = () =>{
        this.setState({genre: "Scifi"})
    }

    render() {
        return (
            <div>
                <p>Change a word's genre</p> 
                <p>Genre will be set to: {this.state.genre}</p>

                <div className="dropdown">                    
                    <button className="dropbtn">Set Genre</button>
                    <div class="dropdown-content">
                        <button onClick={this.makeFantasy}>Fantasy</button>
                        <button onClick={this.makeHorror}>Horror</button>
                        <button onClick={this.makeScifi}>Scifi</button>
                    </div>                    
                </div>
                <div>
                <input type="text" onChange={this.changeValue} />
                <button onClick={this.updateWord}>Get Word</button>
                <p>{this.state.data}</p>
                </div>
            </div>

        );
    }
}

export default UpdatePage;