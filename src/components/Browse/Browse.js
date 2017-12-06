import React, { Component } from "react";
import "./Browse.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import { addAnimal } from '../../ducks/reducer';
import Animals from './Animals/Animals.js'
import Add from '../Add/Add.js';

class Browse extends Component {
    constructor() {
        super();
        this.state = {
            currentAnimalList: []
        }
        // this.handleAnimalList = this.handleAnimalList.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        console.log("CWRP", nextProps)
        this.setState({
            currentAnimalList: nextProps.currentAnimalList
        })
    }

    // handleAnimalList() {

    // }

    render() {
        console.log("Props: ", this.props)
        return (
            <main>
                <Nav />
                <br />
                <div className="testBox">
                    <div className="boxSize">Browse</div>
                </div>
                <br />
                <br />
                {/* <button type="submit" onClick={() => {
                    this.handleAnimalList()
                }}>Refresh Animal List</button> */}
                <br />
                <br />
                <Animals list={this.props.currentAnimalList} />
                <Link to="/render"><button>Render Router</button></Link>
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