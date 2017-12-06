import React, { Component } from "react";
import "./Add.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import { addAnimal } from '../../ducks/reducer';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageSource: '',
            details: '',
            stock: ''
        }
        this.updateName = this.updateName.bind(this);
        this.updateImageSource = this.updateImageSource.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }
    updateName(value) {
        this.setState({ name: value })
    }

    updateImageSource(value) {
        this.setState({ imageSource: value })
    }

    updateDetails(value) {
        this.setState({ details: value })
    }

    updateStock(value) {
        this.setState({ stock: value })
    }
    render() {
        return (
            <main>
                <Nav />
                <div>Add Animal</div>
                <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateName(e.target.value)}
                />
                <input placeholder="image url" className="input" type="text" name="image source" onChange={(e) => this.updateImageSource(e.target.value)}
                />
                <input placeholder="details" className="input" type="text" name="details" onChange={(e) => this.updateDetails(e.target.value)}
                />
                <input placeholder="stock" className="input" type="text" name="stock" onChange={(e) => this.updateStock(e.target.value)}
                />
                <button onClick={() => {
                    this.props.addAnimal({ name: this.state.name, image: this.state.imageSource, details: this.state.details, stock: this.state.stock })
                }}>Submit</button>
            </main >

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { addAnimal })(Add);