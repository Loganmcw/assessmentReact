import React, { Component } from "react";
import "./Details.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav.js';
import axios from 'axios'

class Details extends Component {
    constructor(props) {
        console.log("Props:  ", props)
        super(props);
        this.state = {
            currentDetails: [{ name: "test" }],
            name: '',
            newName: ''
        }
        this.updateName = this.updateName.bind(this);
        this.updateNewName = this.updateNewName.bind(this);
        this.handleGet = this.handleGet.bind(this);
        this.handlePut = this.handlePut.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDetails = this.handleDetails.bind(this);
    }

    handleDetails(value) {
        console.log("value", value)
        if (value) {
            return value.map((e, i, arr) => {
                console.log(e.name)
                return (
                    <div>
                        please
                        {e.name}
                    </div>
                )
            })
        }
    }

    updateName(value) {
        this.setState({ name: value })
    }
    updateNewName(value) {
        this.setState({ newName: value })
    }
    handleGet() {
        axios.get(`/api/get/${this.state.name}`).then(res => {
            console.log("Response", res.data)
            this.handleDetails(res.data)
        })
    }

    handlePut() {
        axios.put('/api/put', { animal: this.state.name, newName: this.state.newName }).then(res => {
            console.log("Response", res.data)
            this.handleDetails(res.data)
        })
    }
    handlePost() {
        axios.post('/api/post', { animal: this.state.name }).then(res => {
            console.log("Response", res.data)
            this.handleDetails(res.data)
        })
    }
    handleDelete() {
        axios.delete(`/api/delete/${this.state.name}`).then(res => {
            console.log("Response", res.data)
            this.handleDetails(res.data)
        })
    }

    render() {
        return (
            <main>
                <Nav />
                <div>Details and RESTful API requests</div>
                <section>
                    <div>{this.handleDetails()}</div>
                    {/* <p>{this.props.currentAnimal.name}</p>
                    <p>{this.props.currentAnimal.image}</p>
                    <p>{this.props.currentAnimal.details}</p>
                    <p>{this.props.currentAnimal.stock}</p> */}
                    <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateName(e.target.value)}
                    />
                    <button type="submit" onClick={() => { { this.handleGet() } }}>Get</button>
                    <br />
                    <br />
                    <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateName(e.target.value)}
                    />
                    <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateNewName(e.target.value)}
                    />
                    <button type="submit" onClick={() => { { this.handlePut() } }}>Put</button>
                    <br />
                    <br />
                    <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateName(e.target.value)}
                    />
                    <button type="submit" onClick={() => { { this.handlePost() } }}>Post</button>
                    <br />
                    <br />
                    <input placeholder="name" className="input" type="text" name="Name" onChange={(e) => this.updateName(e.target.value)}
                    />
                    <button type="submit" onClick={() => { { this.handleDelete() } }}>Delete</button>
                </section>
            </main>

        )
    }
}



export default Details;