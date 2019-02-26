import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Output from './Output';
import CreatePage from './CreatePage';
import ReadPage from './ReadPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';

function Routing() {
    return (
        <Router>
            <div>
                <div><button className="Nav"><NavLink to="/">Story Gen</NavLink></button></div>
                <div><button className="Nav"><NavLink to="/create">Create</NavLink></button></div>
                <div><button className="Nav"><NavLink to="/read">Read</NavLink></button></div>
                <div><button className="Nav"><NavLink to="/update">Update</NavLink></button></div>
                <div><button className="Nav"><NavLink to="/delete">Delete</NavLink></button></div>
                <div className="Output"><Route exact path="/" component={Output} /></div>
                <div className="Output2"><Route exact path="/create" component={CreatePage} /></div>
                <div className="Output2"><Route exact path="/read" component={ReadPage} /></div>
                <div className="Output2"><Route exact path="/update" component={UpdatePage} /></div>
                <div className="Output2"><Route exact path="/delete" component={DeletePage} /></div>
            </div>
        </Router>

    );
}

export default Routing;