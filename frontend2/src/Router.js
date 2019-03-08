import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Output from './Output';
import CreatePage from './CreatePage';
import ReadPage from './ReadPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';
import UserPage from './UserPage';

class Routing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            loggedin: 0
        };
    }

    logIn = () => {
        this.setState({ loggedin: 1 })
    }

    logOut = () => {
        this.setState({ loggedin: 0 })
    }

    idRaise = () => {
        this.setState({ id: this.state.id + 1 })
    }

    render() {
        return (
            <Router>
                <div>
                    <div><NavLink to="/storygen" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Story Gen</button></NavLink></div>
                    <div><NavLink to="/create" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Create</button></NavLink></div>
                    <div><NavLink to="/read" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Read</button></NavLink></div>
                    <div><NavLink to="/update" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Update</button></NavLink></div>
                    <div><NavLink to="/delete" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Delete</button></NavLink></div>
                    <div><NavLink to="/users" style={{ color: 'rgb(145,200,255)', textDecoration: 'none' }} activeClassName="link"><button className="Nav">
                        Users</button></NavLink></div>
                    <div className="Output"><Route exact path="/storygen" component={Output} /></div>
                    <div className="Output2"><Route exact path="/create" render={()=>
                        <CreatePage loggedin={this.state.loggedin}/>} /></div>
                    <div className="Output2"><Route exact path="/read" render={()=>
                        <ReadPage loggedin={this.state.loggedin}/>} /></div>
                    <div className="Output2"><Route exact path="/update" render={()=>
                        <UpdatePage loggedin={this.state.loggedin}/>} /></div>
                    <div className="Output2"><Route exact path="/delete" render={()=>
                        <DeletePage loggedin={this.state.loggedin}/>} /></div>
                    <div className="Output2"><Route exact path="/users" render={() =>
                        <UserPage loggedin={this.state.loggedin}
                            id={this.state.id}
                            logIn={this.logIn}
                            logOut={this.logOut}
                            idRaise={this.idRaise} />} /></div>
                </div>
            </Router>

        );
    }

}

export default Routing;