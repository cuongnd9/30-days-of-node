import React from 'react';
import { 
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink 
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to='/' className='navbar-brand'>
            Simple MERN Stack
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/' className='nav-link'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/cats' className='nav-link'>Cats</Link>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/cuongw/simple-mern-stack'>
                	Github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/cuongw'>
                	About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}