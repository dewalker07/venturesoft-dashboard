import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import FormikDatePicker from '../../../Set1/Profile/FormikDatePicker';
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
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'semantic-ui-react';
import FormikRadioGroup from '../../../Set1/Settings/FormikRadioGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from "react-responsive-modal";
import Header from '../../Header/Header';

import '../project.css';
import './view.css';
import SupervisorViewHeader from './SupervisorViewHeader';

class SupervisorView extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
            open: false
        };
    }
    
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

      
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
        const { open } = this.state;
        return ( 

            <div className = "animated fadeIn" >
            <Header />
            <SupervisorViewHeader />
            
           <div className="gr-message"></div>

           <Formik
                initialValues={{
                    // email: '',
                    password: '',
                    date: '2019-10-24T22:00:00.000Z'
                }}
                validationSchema={Yup.object().shape({
                    // email: Yup.string()
                    //     .email('Email is invalid')
                    //     .required('Email is required'),
                    facode: Yup.number()
                         .min(4, '2FACODE must be 4 digit number')
                         .required('Code required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur,errors, status, touched }) => (
        <Form>
            <div className = "table-data">
            <div className="task-row">
            <div className="form-row">
                <div className="col-4">
                <div className="form-group has-taskid">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="Task ID" />

                  <div><button className="btn_download_csv">Download as CSV/JSON</button>
                  {/* <button className="btn_archieve">Archieve</button> */}
                  </div>
                </div>
                </div>
                <div className="col-4 sample-flex">
                    <div className="sample-flex">
                        <span>From</span> <FormikDatePicker />
                    </div>
                    <div className="sample-flex">
                        <span>To</span> <FormikDatePicker />
                    </div>
                </div>
                <div className="col-2">
                    <h4 className="status">Status</h4>
                </div>
                <div className="col-2">
                <span className="checkbox-status status-inline">
                       <Checkbox className="ou-progress" label='New' /> 
                       <Checkbox className="ou-progress" label='In Progress' /> 
                       <Checkbox className="ou-progress" label='Completed' /> 
                   </span>
                </div>
            </div>
            </div>
 
            <table className="table so-table">
            <thead>
            <tr>
            <th>Task ID</th> 
            <th>Batch ID</th> 
            <th>State</th> 
            <th>
                <span><Checkbox className="select-all" /></span>Select all</th> 
            </tr> 
            </thead>
            <tbody>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>Complete</td>
                    <td>
                    <span><Checkbox className="select"/></span>
                    </td>
                </tr>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>In Progress</td>
                    <td>
                        <span><Checkbox className="select" /></span>
                    </td>
                </tr>

                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>Complete</td>
                    <td>
                    <span><Checkbox className="select"/></span>
                    </td>
                </tr>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>In Progress</td>
                    <td>
                        <span><Checkbox className="select" /></span>
                    </td>
                </tr>

                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>Complete</td>
                    <td>
                    <span><Checkbox className="select"/></span>
                    </td>
                </tr>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>In Progress</td>
                    <td>
                        <span><Checkbox className="select" /></span>
                    </td>
                </tr>

                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>Complete</td>
                    <td>
                    <span><Checkbox className="select"/></span>
                    </td>
                </tr>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>In Progress</td>
                    <td>
                        <span><Checkbox className="select" /></span>
                    </td>
                </tr>

                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>Complete</td>
                    <td>
                    <span><Checkbox className="select"/></span>
                    </td>
                </tr>
                <tr>
                    <td>2345</td>
                    <td>9876</td>
                    <td>In Progress</td>
                    <td>
                        <span><Checkbox className="select" /></span>
                    </td>
                </tr>

                
            </tbody>
            </table> 
            </div>

            </Form>
                )}
            </Formik>
            </div>
        );
    }
}

export default SupervisorView;