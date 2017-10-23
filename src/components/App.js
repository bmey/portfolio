import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResponsiveNav from './nav/ResponsiveNav';
import { appRoutes, notFoundRoute } from './routes';

const App = () => (
  <Router basename="/portfolio">
    <div className="navbar-spacing">
      <ResponsiveNav routes={appRoutes} />
      <Switch>
        {appRoutes.map((route, index) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={index}
          />
        ))}
        <Route component={notFoundRoute.component} />
      </Switch>
    </div>
  </Router>
);

export default App;
