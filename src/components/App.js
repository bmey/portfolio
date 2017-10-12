import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
import ResponsiveNav from './Nav/ResponsiveNav';
import routes from './routes';

const AsyncNotFound = asyncComponent(() => import('./NotFound/NotFound'));

class App extends Component {
  render() {
    return (
      <Router basename="/portfolio">
        <div style={{ marginTop: '5em' }}>
          <ResponsiveNav routes={routes} />
          <Switch>
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Route component={AsyncNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
