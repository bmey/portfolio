import './Nav.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class ResponsiveNav extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  };

  state = {
    collapsed: true
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    const { collapsed } = this.state;
    const { routes } = this.props;

    return (
      <Navbar color="dark" dark expand="sm" className="fixed-top-sm">
        <Link
          to="/"
          className="navbar-brand mr-auto"
          onClick={() => this.closeNavbar()}
        >
          Bryan Mey
        </Link>
        <NavbarToggler onClick={() => this.toggleNavbar()}>Menu</NavbarToggler>
        <Collapse isOpen={!collapsed} navbar className="justify-content-end">
          <Nav navbar className="text-right">
            {routes.map(route => (
              <NavItem onClick={() => this.closeNavbar()} key={route.path}>
                <NavLink
                  to={route.path}
                  className="nav-link"
                  activeClassName="active"
                  exact={route.exact}
                >
                  {route.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
