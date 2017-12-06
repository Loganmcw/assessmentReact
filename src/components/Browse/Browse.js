import React, { Component } from "react";
import "./Browse.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import { addAnimal } from '../../ducks/reducer';

class Browse extends Component {
    constructor() {
        super();
        this.state = {
            currentAnimalList: []
        }
        this.handleAnimalList = this.handleAnimalList.bind(this);
        this.currentAnimal = this.currentAnimal.bind(this);
    }

    handleAnimalList() {
        this.setState({
            currentAnimalList: this.props.currentAnimalList
        })
    }

    currentAnimal(e) {
        this.props.currentAnimal(e)
    }

    animals() {
        return this.state.currentAnimalList.map((e, i, arr) => {
            return (
                <div>
                    <br />
                    <br />
                    <Link to={`/details/${e.name}`} onClick={() => { this.currentAnimal(e.name) }}>
                        <p>{e.name}</p>
                    </Link>
                    <img src={e.image} alt='' />
                    <p>Details: {e.details}</p>
                    <p>Stock: {e.stock}</p>
                    <br />
                    <br />
                    <br />
                </div >
            )
        })
    }
    render() {
        console.log("List: ", this.state.currentAnimalList)
        return (
            <main>
                <Nav />
                <br />
                <br />
                <div>Browse</div>
                <br />
                <button type="submit" onClick={() => {
                    this.handleAnimalList()
                }}>Refresh Animal List</button>
                <br />
                <br />
                <section>{this.animals()}</section>
            </main>

        )
    }
}

function mapStateToProps(state) {
    return {
        currentAnimalList: state.currentAnimalList
    }
}

export default connect(mapStateToProps, { addAnimal })(Browse);