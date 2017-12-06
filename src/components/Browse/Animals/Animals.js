import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentAnimal } from '../../../ducks/reducer';


function handleAnimalsDisplay(props) {
    console.log("Animals", props)
    return props.list.map((e, i, arr) => {
        return (
            <div>
                <br />
                <br />
                <Link to={`/details/${e.name}`} onClick={() => { setAnimal(e, props) }}>
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

function setAnimal(e, props) {
    console.log("Animals component", props)
    props.currentAnimal([e])
}

function mapStateToProps(state) {
    return {
        currentAnimalList: state.currentAnimalList
    }
}

export default connect(mapStateToProps, { currentAnimal })(handleAnimalsDisplay);