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
            {
                "genre": "Fantasy"
            })
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));

    }

    makeFantasy = () =>{
        this.setState({genre: "Fantasy"})
    }

    render() {
        return (
            <div>
                <p>Change a word's genre</p>

                <div>
                    <button className="dropper">Set Genre</button>
                    <div class="dropdown-content">
                        <button onclick={this.makeFantasy}>Fantasy</button>
                        <button onclick={this.makeHorror}>Horror</button>
                        <button onclick={this.makeScifi}>Scifi</button>
                    </div>
                </div>
                <input type="text" onChange={this.changeValue} />
                <button onClick={this.updateWord}>Get Word</button>
                <p>{this.state.data}</p>
            </div>

        );
    }
}

export default UpdatePage;