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

import '../Project/project.css';

class SuperProjectHeader extends React.Component {
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
              <NavItem>
                  <h4 className="role">Role</h4>
                </NavItem> 
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmsupervisor" activeClassName="active" className="nav-link" >Supervisor</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmagent" activeClassName="active" className="nav-link">Agent</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmreviewer" activeClassName="active" className="nav-link">Reviewer</NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-btn">
                  <button className="btn-startwork"><Link className="btn-start" to="/pmsupervisorx">Start Work</Link></button>
                </Nav>
           </Navbar>
           
           </div>
         );
    }
}

export default SuperProjectHeader;