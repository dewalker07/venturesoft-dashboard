import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
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
import OverviewTaskHeader from './OverviewTaskHeader';

class SupervisorOverview extends Component {
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
            <OverviewTaskHeader />
            <Navbar expand="md">
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/overview" activeClassName="active" className="nav-link">Overview</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="#" activeClassName="active" className="nav-link" >Tasks</NavLink>
                </NavItem>
                </Nav>
           </Navbar>

           <div className="gr-message"></div>

            <div className = "table-data">
            <Table >
            <thead>
            <tr>
            <th> Step </th> 
            <th> No Of agents </th> 
            <th> Tasks Completed </th> 
            <th> Tasks Available </th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <span className = "db-prod"> Production </span>
            </td> 
            <td>
            <span className = "db-pr"> 10 </span>
            </td> 
            <td>
            <span className = "db-pr"> 2000 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 3000 </span>
            </td>
            </tr> 
             <tr>
            <td>
            <span className = "db-review"> Review </span>
            </td> 
            <td>
            <span className = "db-pr"> 4 </span>
            </td> 
            <td>
            <span className = "db-pr"> 300 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 1700 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-prod"> Production </span>
            </td> 
            <td>
            <span className = "db-pr"> 10 </span>
            </td> 
            <td>
            <span className = "db-pr"> 2000 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 3000 </span>
            </td>
            </tr> 
             <tr>
            <td>
            <span className = "db-review"> Review </span>
            </td> 
            <td>
            <span className = "db-pr"> 4 </span>
            </td> 
            <td>
            <span className = "db-pr"> 300 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 1700 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-prod"> Production </span>
            </td> 
            <td>
            <span className = "db-pr"> 10 </span>
            </td> 
            <td>
            <span className = "db-pr"> 2000 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 3000 </span>
            </td>
            </tr> 
             <tr>
            <td>
            <span className = "db-review"> Review </span>
            </td> 
            <td>
            <span className = "db-pr"> 4 </span>
            </td> 
            <td>
            <span className = "db-pr"> 300 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 1700 </span>
            </td>
            </tr> 
            <tr>
            <td>
            <span className = "db-prod"> Production </span>
            </td> 
            <td>
            <span className = "db-pr"> 10 </span>
            </td> 
            <td>
            <span className = "db-pr"> 2000 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 3000 </span>
            </td>
            </tr> 
             <tr>
            <td>
            <span className = "db-review"> Review </span>
            </td> 
            <td>
            <span className = "db-pr"> 4 </span>
            </td> 
            <td>
            <span className = "db-pr"> 300 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 1700 </span>
            </td>
            </tr>
            <tr>
            <td>
            <span className = "db-prod"> Production </span>
            </td> 
            <td>
            <span className = "db-pr"> 10 </span>
            </td> 
            <td>
            <span className = "db-pr"> 2000 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 3000 </span>
            </td>
            </tr> 
             <tr>
            <td>
            <span className = "db-review"> Review </span>
            </td> 
            <td>
            <span className = "db-pr"> 4 </span>
            </td> 
            <td>
            <span className = "db-pr"> 300 </span> 
            </td> 
            <td>
            <span className = "db-pr"> 1700 </span>
            </td>
            </tr> 
            </tbody> 
            </Table> 
            </div>

            
            </div>
        );
    }
}

export default SupervisorOverview;