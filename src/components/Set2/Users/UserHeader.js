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

import Switch from "./Switch";
import Toggle from "./Toggle";

import './user.css';

class UserHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            onToggle: false
         }
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
      }
     
    onToggle = () => {
        this.setState(prevState => ({
            onToggle: !prevState.onToggle,
        }))
    }

    render() { 
        const {isOpen} = this.state;
        const {onToggle} = this.state;
        
        return ( 
            <div>
            <Navbar expand="md" className="prf-view">
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="User" />
                </div>
                </NavItem>
               
                
                </Nav>
                <Nav className="ml-user-left">
                <div className="toggle">
                  <div className="toggle-active">Active</div>
                  <Toggle onToggle={onToggle}>
                    {({ on, onToggle }) => (
                    <div>
                        <Switch on={on} onSwitch={onToggle} />
                    </div>
                    )}
                </Toggle></div>
                  <button className="btn-save"><Link to="/create/user">Create User</Link></button>
                </Nav>
           </Navbar>
           
           </div>
         );
    }
}

export default UserHeader;