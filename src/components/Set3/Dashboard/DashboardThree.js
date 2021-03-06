import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import Header from '../Header/Header';

import './dashboardthree.css';

class DashboardThree extends Component {
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
            
            <Row className = "gr-message">
            <Col md = "3"> </Col> 
            <Col md = "6">
            <div className = "success-message">
            Hi Project Manager 1!You are logged in as Project Manager
            </div>
            </Col> 
            </Row>
            <Col md = "3"> </Col> 
            <div className = "table-data">

            <table className="table pm-table">
            <thead>
            <tr>
            <th> Project </th> 
            <th> Available </th> 
            <th> Completed </th> 
            <th> Status </th> 
            <th> Type </th>
            <th> Project Code </th> 
            </tr> 
            </thead>
            <tbody>
            <tr>
            <td>
            <div><Link className = "pr-1"
            to = "/pmsupervisor"> Project X </Link></div>
            </td> 
            <td>
            <span className = "db-pr"> XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr"> XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active"> Active </span>
            </td>
            <td>
            <span className = "db-pr"> Training </span>
            </td>
            <td>
            <div> PRX </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Y </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRY </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Z </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRZ </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project X </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRX </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Y </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRY </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Z </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRZ </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project X </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRX </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Y </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRY </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Z </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRZ </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project X </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRX </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Y </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRY </div> 
            </td> 
            </tr> 
            <tr>
            <td>
            <div> <Link className = "pr-1"
            to = "#" > Project Z </Link></div>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span>
            </td> 
            <td>
            <span className = "db-pr" > XXXXX </span> 
            </td> 
            <td>
            <span className = "db-pr active" > Active </span>
            </td>
            <td>
            <span className = "db-pr" > Training </span>
            </td>
            <td>
            <div> PRZ </div> 
            </td> 
            </tr> 

            </tbody> 
            </table> 
            </div>

            
            </div>
        );
    }
}

export default DashboardThree;