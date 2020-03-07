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


class PmSamplingHeader extends React.Component {
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
                  <h4 className="role">Project x</h4>
                </Nav> 
                <Nav className="ml-sampling-left">
                  <button type="submit" className="btn-save">Sampling</button>
                </Nav>
           </Navbar>
           
           </div>
         );
    }
}

export default PmSamplingHeader;