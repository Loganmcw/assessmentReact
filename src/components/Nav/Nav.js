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
                    <li><Link to="/browse"><p>Browse Books</p></Link></li>
                    <li><Link to="/details"><p>Book Details</p></Link></li>
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