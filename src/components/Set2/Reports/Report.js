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

import './report.css';

class ReportSupervisor extends Component {
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
            <div></div>
            </Col>
            </Row>
            <div className="table-data">
                <table className="table rep-table">
                  <thead>
                  <tr>
                    <th>Project</th>
                    <th>Date</th>
                    <th>Agents</th>
                    <th>Reviewers</th>
                    <th>Avg TPT</th>
                    <th>Hours</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <div><Link to="/production/reports">Project X</Link></div>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">123</span>
                    </td>
                    <td>
                      <span className = "db-pr">03:23:24</span>
                    </td>
                    
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">123</span>
                    </td>
                    <td>
                      <span className = "db-pr">03:23:24</span>
                    </td>
                    
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project Z</div>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">XXXXX</span>
                    </td>
                    <td>
                      <span className = "db-pr">123</span>
                    </td>
                    <td>
                      <span className = "db-pr">03:23:24</span>
                    </td>
                    
                  </tr>
                  <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Z</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Z</div>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">XXXXX</span>
                   </td>
                   <td>
                     <span className = "db-pr">123</span>
                   </td>
                   <td>
                     <span className = "db-pr">03:23:24</span>
                   </td>
                   
                 </tr>
                 
                  </tbody>
                </table>
                </div>
              
      </div>
    );
  }
}

export default ReportSupervisor;
