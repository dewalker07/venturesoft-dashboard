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


class PmViewHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
         }
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
              <Nav>
                <NavItem>
                  <h4 className="role">Project x</h4>
                </NavItem> 
                <NavItem className="px-3">
                <NavLink tag={RRNavLink} to="/pm/view" activeClassName="active" className="nav-link">View</NavLink>
                </NavItem>
                </Nav>
           </Navbar>
           
           </div>
         );
    }
}

export default PmViewHeader;