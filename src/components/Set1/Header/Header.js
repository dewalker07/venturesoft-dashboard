import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
import cx from 'classnames';

import logo from '../../../assets/logo.png';
import s from './arrow.module.css';

import './header.css';

class Header extends React.Component {
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
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="nav"><img src={logo} alt="VentureSoft Global" /></NavbarBrand>
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/dashboard" activeClassName="active" className="nav-link" >Dashboard</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/project" activeClassName="active" className="nav-link">Project</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/report" activeClassName="active" className="nav-link">Report</NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-auto">
                <NavItem>
           
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
          
                </NavItem>
                  <Dropdown isOpen={isOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle>
                      <span className="text-body">Agent 1</span>
                      <i className={cx('fa fa-angle-down ml-sm', s.arrow, {[s.arrowActive]: isOpen})} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem><i className="fa fa-user"></i><Link to="/profile" className="btn-logout"> Profile</Link></DropdownItem>
                      <DropdownItem><i className="fa fa-wrench"></i><Link to="/settings" className="btn-logout"> Settings</Link></DropdownItem>
                      <DropdownItem><i className="fa fa-lock"></i><Link to="/" className="btn-logout"> Logout</Link></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Nav>
           </Navbar>
         );
    }
}

export default Header;