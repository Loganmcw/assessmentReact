import React, { Component } from "react";
import "./Browse.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Browse extends Component {
    constructor() {
        super();
        this.state = {
            currentAnimalList: []
        }
        this.handleAddAnimal = this.handleAddAnimal.bind(this);
    }
    render() {
        return (
            <main>
                <Nav />
                <div>Browse</div>
                <div onClick={() => { this.handleAddAnimal() }}>Add</div>
            </main>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Browse);