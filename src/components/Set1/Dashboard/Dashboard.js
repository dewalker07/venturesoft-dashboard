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

import './dashboard.css';

class Dashboard extends Component {
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
            <Row className="gr-message">
            <Col md="4"></Col>
            <Col md="4">
            <div className="success-message">
                Hi Agent1! You are logged in as Agent
            </div>
            </Col>
            </Row>
            <Col md="4"></Col>
            <div className="table-data">
                <table className="table sw-table">
                  <thead>
                  <tr className="tble-bg">
                    <th>Project</th>
                    <th>Tasks Available</th>
                    <th>Task Completed</th>
                    <th>Progress</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>9852</div>
                    </td>
                    <td>
                      <div>7520</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>76.3%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <div>6547</div>
                    </td>
                    <td>
                      <div>3052</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>46.6%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>9852</div>
                    </td>
                    <td>
                      <div>7520</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>76.3%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <div>6547</div>
                    </td>
                    <td>
                      <div>3052</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>46.6%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>9852</div>
                    </td>
                    <td>
                      <div>7520</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>76.3%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <div>6547</div>
                    </td>
                    <td>
                      <div>3052</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>46.6%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>9852</div>
                    </td>
                    <td>
                      <div>7520</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>76.3%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <div>6547</div>
                    </td>
                    <td>
                      <div>3052</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>46.6%</strong>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  
                  
                  </tbody>
                </table>
                </div>
              
      </div>
    );
  }
}

export default Dashboard;
