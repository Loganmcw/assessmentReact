import React, { Component } from "react";
import "./Nav.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <main>
                <ul>
                    <li><Link to="/"><p>Browse Animals</p></Link></li>
                    <li><Link to="/add"><p>Add Animals</p></Link></li>
                </ul>
            </main>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Nav);