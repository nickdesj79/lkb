import React, { Component } from 'react';
import {Home} from './views/home/components/Home'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
