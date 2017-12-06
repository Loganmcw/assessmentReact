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
            stock: '',
            currentAnimalList: []
        }
        this.updateName = this.updateName.bind(this);
        this.updateImageSource = this.updateImageSource.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.updateStock = this.updateStock.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.handleAnimals = this.handleAnimals.bind(this);
    }

    componentDidMount() {
        this.setState({
            currentAnimalList: this.props.currentAnimalList
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log("Props", nextProps)
        nextProps.addAnimal()
        this.handleAnimals()
    }

    handleAnimals() {
        return this.state.currentAnimalList.map((e, i, arr) => {
            let float = Math.random() * 10;
            console.log("float", float)
            var direction = (float > 5) ? "right" : "left"
            return (
                <div style={{ float: direction, margin: "10px", border: "3px solid black", padding: "5px", boxShadow: "10px 2px 2px black" }}>{e.name}<br /></div>
            )
        })
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

    addAnimal(e) {
        var tempList = this.state.currentAnimalList
        tempList.push(e)
        this.setState({
            currentAnimalList: tempList
        })
        this.props.addAnimal(this.state.currentAnimalList)
    }

    render() {
        console.log("Props: ", this.props)
        return (
            <main className="main">
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
                    this.addAnimal({ name: this.state.name, image: this.state.imageSource, details: this.state.details, stock: this.state.stock })
                }}>Submit</button>

                <br />
                <br />
                <br />
                <section className="animals">{this.handleAnimals()}</section>
            </main >

        )
    }
}

function mapStateToProps(state) {
    return {
        currentAnimalList: state.currentAnimalList
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addAnimal: (value) => { dispatch(addAnimal(value)) }
//     }
// }

export default connect(mapStateToProps, { addAnimal })(Add);