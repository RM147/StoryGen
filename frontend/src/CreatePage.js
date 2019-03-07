import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: '',
            category: "Adjective",
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

                <table>
                    <tbody>
                        <tr><p className={"loginText"+this.props.loggedin}>LOGIN TO USE THIS FUNCTION! </p></tr>
                        <tr className="create1">
                            <td><p>Want to add a word?</p></td>
                            <td>
                                <div className="dropdown">
                                    <button className="dropbtn">Set Genre</button>
                                    <div className="dropdown-content">
                                        <button onClick={this.makeFantasy}>Fantasy</button>
                                        <button onClick={this.makeHorror}>Horror</button>
                                        <button onClick={this.makeScifi}>Scifi</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="dropdown">
                                    <button className="dropbtn">Set Category</button>
                                    <div className="dropdown-content">
                                        <button onClick={this.makeAdj}>Adjective</button>
                                        <button onClick={this.makePerson}>Person</button>
                                        <button onClick={this.makeSetting}>Setting</button>
                                        <button onClick={this.makeVerb}>Verb</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr disabled={!this.props.loggedin}>

                            <td>

                                <p>Your word will be: {this.state.value}</p>
                                <p>Its genre will be: {this.state.genre}</p>
                                <p>Its category will be: {this.state.category}</p>
                                <p>{this.state.data}</p>
                            </td>
                        </tr>
                        <tr>
                            <input className="input" type="text" onChange={this.changeValue} disabled={!this.props.loggedin} />
                            <button className="dropbtn" onClick={this.addWord} disabled={!this.props.loggedin}>Make Word</button>

                        </tr>
                    </tbody>
                </table>


                <p>{this.props.loggedin}</p>






            </div>

        );
    }
}

export default CreatePage;