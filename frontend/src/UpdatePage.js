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

    render() {
        return (
            <div>
                <table className="update">
                    <tbody><tr><p className={"loginText"+this.props.loggedin}>LOGIN TO USE THIS FUNCTION! </p></tr>
                        <tr className="update1"><td><p>Change a word's genre to: {this.state.genre}</p></td>
                    <td>
                            <div className="dropdown">
                            <button className="dropbtn">Set Genre</button>
                            <div className="dropdown-content">
                                <button onClick={this.makeFantasy}>Fantasy</button>
                                <button onClick={this.makeHorror}>Horror</button>
                                <button onClick={this.makeScifi}>Scifi</button>
                            </div>
                        </div></td></tr>

                        <tr><td><input className="input" type="text" onChange={this.changeValue} disabled={!this.props.loggedin}/>

                                <button className="dropbtn" onClick={this.updateWord} disabled={!this.props.loggedin}>Change Genre</button></td></tr></tbody>


                </table>

                


                <div>

                    <p>{this.state.data}</p>
                   
                </div>
            </div>

        );
    }
}

export default UpdatePage;