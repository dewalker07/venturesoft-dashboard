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
import UserHeader from './UserHeader';

import './user.css';

class User extends Component {
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

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
          <Header />
            <UserHeader />
            <Row className="gr-message">
            <Col md="4"></Col>
            <Col md="4">
            <div>
                
            </div>
            </Col>
            </Row>
            <div className="table-data">
                <Table>
                  {/* <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  </thead> */}
                  <tbody>
                  <tr>
                   
                    <td>
                        <div>Agent 1</div>
                    </td>
                    <td>
                        <span className="pr-user">Settings</span>
                    </td>
                    <td>
                        <span className="pr-user">2fa</span>
                    </td>
                    <td>
                        <span className="pr-user">Active</span>
                    </td>
                    <td>
                        <span className="pr-user">Manage</span>
                    </td>
                    </tr>
                    <tr>
                   
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr> 

                   <tr>
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                   <tr>
                   <td>
                       <div>Agent 1</div>
                   </td>
                   <td>
                       <span className="pr-user">Settings</span>
                   </td>
                   <td>
                       <span className="pr-user">2fa</span>
                   </td>
                   <td>
                       <span className="pr-user">Active</span>
                   </td>
                   <td>
                       <span className="pr-user">Manage</span>
                   </td>
                   </tr>
                  
                  </tbody>
                </Table>
                </div>
              
      </div>
    );
  }
}

export default User;
