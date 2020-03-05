import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col, 
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import './setupproject.css';

class SetupProjectHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
      }
    
    render() { 
        const {isOpen} = this.state;
        
        return ( 
            <div>
            <Navbar expand="md" className="prf-view">
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/clientinfo" activeClassName="active" className="nav-link" >Client Info</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/input" activeClassName="active" className="nav-link">Input</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/output" activeClassName="active" className="nav-link">Output</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/api" activeClassName="active" className="nav-link">API</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/seedupload" activeClassName="active" className="nav-link">Seed Upload</NavLink>
                </NavItem>
                </Nav>
           </Navbar>
           
           </div>
         );
    }
}

export default SetupProjectHeader;