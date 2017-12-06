import React, { Component } from "react";
import "./Details.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            currentDetails: []
        }
    }
    render() {
        return (
            <main>
                <Nav />
                <div>Details</div>
            </main>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Details);