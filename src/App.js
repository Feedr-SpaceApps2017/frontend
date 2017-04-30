import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Timeline from './Timeline';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/timeline" component={Timeline} />
        </div>
      </Router>
    );
  }
}

export default App;
