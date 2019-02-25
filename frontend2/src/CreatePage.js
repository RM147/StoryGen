import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: '',
            category: "None",
            genre: "Common"
        };
    }

    addWord = () => {
        axios.post(`http://localhost:8080/StoryGen/api/word/addWord`, {

            "word": this.state.value,
            "category": this.state.category,
            "genre": this.state.genre
        })
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

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

    makeAdj = () => {
        this.setState({ category: "Adjective" })
    }

    makePerson = () => {
        this.setState({ category: "Person" })
    }

    makeSetting = () => {
        this.setState({ category: "Setting" })
    }

    makeVerb = () => {
        this.setState({ category: "Verb" })
    }

    changeValue = (e) => {
        this.setState({ value: e.target.value });

    }

    render() {
        return (
            <div>
                <p>Type your word in the box and pick it's word type and genre from the menus.</p>
                <div className="dropdown">
                    <button className="dropbtn">Set Genre</button>
                    <div class="dropdown-content">
                        <button onClick={this.makeFantasy}>Fantasy</button>
                        <button onClick={this.makeHorror}>Horror</button>
                        <button onClick={this.makeScifi}>Scifi</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Set Category</button>
                    <div class="dropdown-content">
                        <button onClick={this.makeAdj}>Adjective</button>
                        <button onClick={this.makePerson}>Person</button>
                        <button onClick={this.makeSetting}>Setting</button>
                        <button onClick={this.makeVerb}>Verb</button>
                    </div>
                </div>
                <input type="text" onChange={this.changeValue} />
                <button onClick={this.addWord}>Make Word</button>
                <p>Your word will be:</p>
                <p>Its genre will be:</p>
                <p>Its category will be:</p>
                <p>{this.state.data}</p>
            </div>

        );
    }
}

export default CreatePage;