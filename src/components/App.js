import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const AsyncHome = asyncComponent(() => import('./Home/Home'));
const AsyncWork = asyncComponent(() => import('./Work/Work'));
const AsyncAbout = asyncComponent(() => import('./About/About'));
const AsyncContact = asyncComponent(() => import('./Contact/Contact'));
const AsyncNotFound = asyncComponent(() => import('./NotFound/NotFound'));

class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Bryan Mey</h2>
            </div>
            <p className="App-intro">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </p>
          </div>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/work" component={AsyncWork} />
            <Route path="/about" component={AsyncAbout} />
            <Route path="/contact" component={AsyncContact} />
            <Route component={AsyncNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;