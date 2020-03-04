import React, { Component } from 'react';
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

class Report extends Component {
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
                    <th>Tasks Available</th>
                    <th>Time per task(Secs)</th>
                    <th>Avg time(hrs)</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>2</div>
                    </td>
                    <td>
                      <div>360</div>
                    </td>
                    <td>
                      <div>2:05:12</div>
                    </td>
                    
                  </tr>
                  <tr>
                   
                    <td>
                      <div>Project X</div>
                    </td>
                    <td>
                      <div>2</div>
                    </td>
                    <td>
                      <div>360</div>
                    </td>
                    <td>
                      <div>2:05:12</div>
                    </td>
                    
                  </tr>
                  <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>
                   
                 </tr>
                 <tr>
                   
                   <td>
                     <div>Project X</div>
                   </td>
                   <td>
                     <div>2</div>
                   </td>
                   <td>
                     <div>360</div>
                   </td>
                   <td>
                     <div>2:05:12</div>
                   </td>                 
                 </tr>
                  </tbody>
                </table>
                </div>
              
      </div>
    );
  }
}

export default Report;
