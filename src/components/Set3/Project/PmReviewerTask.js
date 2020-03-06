import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import FormikDatePicker from '../../Set1/Profile/FormikDatePicker';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Table,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import Header from '../Header/Header';

import './project.css';
import PmTaskHeader from './PmTaskHeader';

class PmReviewerTask extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }

    loading = () => <div className = "animated fadeIn pt-1 text-center" > Loading... </div>

    render() {

        return ( 

            <div className = "animated fadeIn" >
            <Header />
            <PmTaskHeader />
            <Navbar expand="md">
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmoverview/supervisor" activeClassName="active" className="nav-link">Overview</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmtasks/reviewer" activeClassName="active" className="nav-link" >Tasks</NavLink>
                </NavItem>
                </Nav>
           </Navbar>

           <div className="gr-message"></div>
            
        
        <div className = "table-data">
            <table className="table task-table">
            <thead>
            <tr>
            <th> Production </th> 
            <th>  <FormikDatePicker /> </th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <span className = "db-time"> Time </span>
            <span className = "db-total"> Total </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-time"> Agent 1 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span>
            </td>
            </tr>
            <tr>
            <td>
            <span className = "db-time"> Agent 2 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <span></span>
            <center><span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span></center>
            </td>
            </tr>
            </tbody> 
            
            <thead>
            <tr>
            <th> Review </th> 
            <th>  <FormikDatePicker /> </th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <span className = "db-time"> Time </span>
            <span className = "db-total"> Total </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-time"> Agent 1 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span>
            </td>
            </tr>
            <tr>
            <td>
            <span className = "db-time"> Agent 2 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <center><span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span></center>
            </td>
            </tr>
            </tbody> 
            
            <thead>
            <tr>
            <th>Production</th> 
            <th><FormikDatePicker /></th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <span className = "db-time"> Time </span>
            <span className = "db-total"> Total </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-time"> Agent 1 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span>
            </td>
            </tr>
            <tr>
            <td>
            <span className = "db-time"> Agent 2 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <center><span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span></center>
            </td>
            </tr>
            </tbody> 

            <thead>
            <tr>
            <th> Review </th> 
            <th>  <FormikDatePicker /> </th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <span className = "db-time"> Time </span>
            <span className = "db-total"> Total </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-time"> Agent 1 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span>
            </td>
            </tr>
            <tr>
            <td>
            <span className = "db-time"> Agent 2 </span>
            <span className = "db-total"> 269 </span>
            </td> 
            <td>
            <center><span className = "db-task-rating"> 0 0 0 0 0 0 45 56 78 90 0 0 0 0 </span></center>
            </td>
            </tr>
            </tbody> 

            </table> 
            
            </div>
            </div>
        );
    }
}

export default PmReviewerTask;