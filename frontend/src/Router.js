import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Output from './Output';
import CreatePage from './CreatePage';
import ReadPage from './ReadPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';
import UserPage from './UserPage';

function Routing() {
    return (
        <Router>
            <div>
                <div><NavLink to="/storygen" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Story Gen</button></NavLink></div>
                <div><NavLink to="/create" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Create</button></NavLink></div>
                <div><NavLink to="/read" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Read</button></NavLink></div>
                <div><NavLink to="/update" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Update</button></NavLink></div>
                <div><NavLink to="/delete" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Delete</button></NavLink></div>
                <div><NavLink to="/users" style={{color: 'rgb(145,200,255)',textDecoration: 'none'}} activeClassName="link"><button className="Nav">
                Users</button></NavLink></div>               
                <div className="Output"><Route exact path="/storygen" component={Output} /></div>
                <div className="Output2"><Route exact path="/create" component={CreatePage} /></div>
                <div className="Output2"><Route exact path="/read" component={ReadPage} /></div>
                <div className="Output2"><Route exact path="/update" component={UpdatePage} /></div>
                <div className="Output2"><Route exact path="/delete" component={DeletePage} /></div>
                <div className="Output2"><Route exact path="/users" component={UserPage} /></div>
            </div>
        </Router>

    );
}

export default Routing;