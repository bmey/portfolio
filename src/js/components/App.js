import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const AsyncHome = asyncComponent(() => import('../containers/Home'));
const AsyncNotFound = asyncComponent(() => import('../containers/NotFound'));

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
              </ul>
            </p>
          </div>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route component={AsyncNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;