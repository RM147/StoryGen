import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Output from './Output';
import CreatePage from './CreatePage';
import ReadPage from './ReadPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';

function Routing() {
    return (
        <Router>
            <div>
                <div><button className="Nav"><Link to="/">Story Gen</Link></button></div>
                <div><button className="Nav"><Link to="/create">Create</Link></button></div>
                <div><button className="Nav"><Link to="/read">Read</Link></button></div>
                <div><button className="Nav"><Link to="/update">Update</Link></button></div>
                <div><button className="Nav"><Link to="/delete">Delete</Link></button></div>
                <div className="Output"><Route exact path="/" component={Output} /></div>
                <div className="Output2"><Route exact path="/create" component={CreatePage} /></div>
                <div className="Output2"><Route exact path="/read" component={ReadPage} /></div>
                <div className="Output2"><Route exact path="/update" component={UpdatePage} /></div>
                <div className="Output2"><Route exact path="/delete" component={DeletePage} /></div>
            </div>
        </Router>

    );
}

class Binner extends Component {
    render() {
        return (
            <p>Rana's Story Generator</p>

        );
    }
}

export default Routing;