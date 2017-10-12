import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class ResponsiveNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

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
    const { routes } = this.props;

    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <Link to="/" className="navbar-brand mr-auto">
          Bryan Mey
        </Link>
        <NavbarToggler onClick={this.toggleNavbar}>Menu</NavbarToggler>
        <Collapse
          isOpen={!this.state.collapsed}
          navbar
          className="justify-content-end"
        >
          <Nav navbar className="text-right">
            {routes.map(route => (
              <NavItem onClick={this.closeNavbar}>
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
