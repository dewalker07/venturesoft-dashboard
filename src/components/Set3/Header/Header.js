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

import './headertwo.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isOpen: false,
          collapsed: true
         }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
      }

    toggleNavbar () {
      this.setState({
        collapsed: !this.state.collapsed
        });
      }

      closeNavbar() {
        if (this.state.collapsed == true) {
        this.toggleNavbar();
        }
    }

    render() { 
        const {isOpen} = this.state;
        
        return ( 
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="nav"><img src={logo} alt="VentureSoft Global" /></NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed}  navbar>
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/projectmanager" activeClassName="active" className="nav-link" >Dashboard</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmadmin/project" activeClassName="active" className="nav-link">Project</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="#" activeClassName="active" className="nav-link">Report</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pm/users" activeClassName="active" className="nav-link">Users</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="#" activeClassName="active" className="nav-link">Setup Project</NavLink>
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
                    <DropdownToggle className="btn-pro">
                      <span className="text-body">Project Manager 1</span>
                      <i className={cx('fa fa-angle-down ml-sm', s.arrow, {[s.arrowActive]: isOpen})} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem><i className="fa fa-user"></i><Link to="/role" className="btn-logout"> Role</Link></DropdownItem>
                      <DropdownItem><i className="fa fa-wrench"></i><Link to="/supervisor/settings" className="btn-logout"> Settings</Link></DropdownItem>
                      <DropdownItem><i className="fa fa-lock"></i><Link to="/" className="btn-logout"> Logout</Link></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Nav>
                </Collapse>
           </Navbar>
         );
    }
}

export default Header;