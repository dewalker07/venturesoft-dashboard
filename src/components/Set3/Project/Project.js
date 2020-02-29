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

import './project.css';

class ProjectSupervisor extends Component {
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
            <div>
                
            </div>
            </Col>
            </Row>
            <div className="table-data">
                <Table>
                  <thead>
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Overview</th>
                    <th>Tasks</th>
                    <th>Sampling</th>
                    <th>View</th>
                    <th>Project Code</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <span className = "db-pr active">Active</span>
                    </td>
                    <td>
                      <span className = "db-pr">Training</span>
                    </td>
                    <td>
                      <span className = "db-pr"><Link to="/overview">Overview</Link></span>
                    </td>
                    <td>
                      <span className = "db-pr"><Link to="/tasks">Task</Link></span>
                    </td>
                    <td>
                      <span className = "db-pr">Sampling</span>
                    </td>
                    <td>
                      <span className = "db-pr">View</span>
                    </td>
                    <td>
                      <span className = "db-pr">PRX</span>
                    </td>
                    
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project Y</div>
                    </td>
                    <td>
                      <span className = "db-pr paused">Paused</span>
                    </td>
                    <td>
                      <span className = "db-pr">Delivery</span>
                    </td>
                    <td>
                      <span className = "db-pr">Overview</span>
                    </td>
                    <td>
                      <span className = "db-pr">Task</span>
                    </td>
                    <td>
                      <span className = "db-pr">Sampling</span>
                    </td>
                    <td>
                      <span className = "db-pr">View</span>
                    </td>
                    <td>
                      <span className = "db-pr">PRY</span>
                    </td>
                    
                  </tr>
                  <tr>
                   
                   <td>
                     <div>Project Z</div>
                   </td>
                   <td>
                     <span className = "db-pr active">Active</span>
                   </td>
                   <td>
                     <span className = "db-pr">Training</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRX</span>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr active">Active</span>
                   </td>
                   <td>
                     <span className = "db-pr">Training</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRX</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr paused">Paused</span>
                   </td>
                   <td>
                     <span className = "db-pr">Delivery</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRY</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <span className = "db-pr active">Active</span>
                  </td>
                  <td>
                    <span className = "db-pr">Training</span>
                  </td>
                  <td>
                    <span className = "db-pr">Overview</span>
                  </td>
                  <td>
                    <span className = "db-pr">Task</span>
                  </td>
                  <td>
                    <span className = "db-pr">Sampling</span>
                  </td>
                  <td>
                    <span className = "db-pr">View</span>
                  </td>
                  <td>
                    <span className = "db-pr">PRX</span>
                  </td>
                  
                </tr>
               
                <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr active">Active</span>
                   </td>
                   <td>
                     <span className = "db-pr">Training</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRX</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr paused">Paused</span>
                   </td>
                   <td>
                     <span className = "db-pr">Delivery</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRY</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <span className = "db-pr active">Active</span>
                  </td>
                  <td>
                    <span className = "db-pr">Training</span>
                  </td>
                  <td>
                    <span className = "db-pr">Overview</span>
                  </td>
                  <td>
                    <span className = "db-pr">Task</span>
                  </td>
                  <td>
                    <span className = "db-pr">Sampling</span>
                  </td>
                  <td>
                    <span className = "db-pr">View</span>
                  </td>
                  <td>
                    <span className = "db-pr">PRX</span>
                  </td>
                  
                </tr>
               
                <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr active">Active</span>
                   </td>
                   <td>
                     <span className = "db-pr">Training</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRX</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr paused">Paused</span>
                   </td>
                   <td>
                     <span className = "db-pr">Delivery</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRY</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <span className = "db-pr active">Active</span>
                  </td>
                  <td>
                    <span className = "db-pr">Training</span>
                  </td>
                  <td>
                    <span className = "db-pr">Overview</span>
                  </td>
                  <td>
                    <span className = "db-pr">Task</span>
                  </td>
                  <td>
                    <span className = "db-pr">Sampling</span>
                  </td>
                  <td>
                    <span className = "db-pr">View</span>
                  </td>
                  <td>
                    <span className = "db-pr">PRX</span>
                  </td>
                  
                </tr>
               
                <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <span className = "db-pr paused">Paused</span>
                   </td>
                   <td>
                     <span className = "db-pr">Training</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRX</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <span className = "db-pr paused">Paused</span>
                   </td>
                   <td>
                     <span className = "db-pr">Delivery</span>
                   </td>
                   <td>
                     <span className = "db-pr">Overview</span>
                   </td>
                   <td>
                     <span className = "db-pr">Task</span>
                   </td>
                   <td>
                     <span className = "db-pr">Sampling</span>
                   </td>
                   <td>
                     <span className = "db-pr">View</span>
                   </td>
                   <td>
                     <span className = "db-pr">PRY</span>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <span className = "db-pr active">Active</span>
                  </td>
                  <td>
                    <span className = "db-pr">Training</span>
                  </td>
                  <td>
                    <span className = "db-pr">Overview</span>
                  </td>
                  <td>
                    <span className = "db-pr">Task</span>
                  </td>
                  <td>
                    <span className = "db-pr">Sampling</span>
                  </td>
                  <td>
                    <span className = "db-pr">View</span>
                  </td>
                  <td>
                    <span className = "db-pr">PRX</span>
                  </td>
                  
                </tr>
               
                
                 
                  </tbody>
                </Table>
                </div>
              
      </div>
    );
  }
}

export default ProjectSupervisor;
