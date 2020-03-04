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

class Project extends Component {
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
                <table className="table sw-table">
                  <thead>
                  <tr>
                    <th>Project</th>
                    <th>Annotation Type</th>
                    <th>Acess to the project</th>
                    <th>Project Code</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                   
                    <td>
                      <div><Link className="pr-1" to="/production">Project X</Link></div>
                    </td>
                    <td>
                      <div>Image</div>
                    </td>
                    <td>
                      <div>Yes</div>
                    </td>
                    <td>
                      <div>PRX</div>
                    </td>
                    
                  </tr>
                  <tr>
                   
                   <td>
                     <div>Project Y</div>
                   </td>
                   <td>
                     <div>Image</div>
                   </td>
                   <td>
                     <div className="red">Not Assigned</div>
                   </td>
                   <td>
                     <div>PRY</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project Z</div>
                   </td>
                   <td>
                     <div>Video</div>
                   </td>
                   <td>
                     <div>Yes</div>
                   </td>
                   <td>
                     <div>PRZ</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>Image</div>
                   </td>
                   <td>
                     <div>Yes</div>
                   </td>
                   <td>
                     <div>PRX</div>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Y</div>
                  </td>
                  <td>
                    <div>Image</div>
                  </td>
                  <td>
                    <div className="red">Not Assigned</div>
                  </td>
                  <td>
                    <div>PRY</div>
                  </td>
                  
                </tr>
                <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <div>Video</div>
                  </td>
                  <td>
                    <div>Yes</div>
                  </td>
                  <td>
                    <div>PRZ</div>
                  </td>
                  
                </tr>
                 
                 
                 
                <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>Image</div>
                   </td>
                   <td>
                     <div>Yes</div>
                   </td>
                   <td>
                     <div>PRX</div>
                   </td>
                   
                 </tr>
                 <tr>
                  
                  <td>
                    <div>Project Y</div>
                  </td>
                  <td>
                    <div>Image</div>
                  </td>
                  <td>
                    <div className="red">Not Assigned</div>
                  </td>
                  <td>
                    <div>PRY</div>
                  </td>
                  
                </tr>
                <tr>
                  
                  <td>
                    <div>Project Z</div>
                  </td>
                  <td>
                    <div>Video</div>
                  </td>
                  <td>
                    <div>Yes</div>
                  </td>
                  <td>
                    <div>PRZ</div>
                  </td>
                  
                </tr>
                  </tbody>
                </table>
                </div>
              
      </div>
    );
  }
}

export default Project;
