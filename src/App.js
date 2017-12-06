import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Browse from './components/Browse/Browse.js';
import Details from './components/Details/Details.js';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route component={Browse} path="/" exact />
            <Route component={Details} path="/details" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;