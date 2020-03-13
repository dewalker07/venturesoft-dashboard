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
import './sampling.css';


import SupervisorSamplingHeader from './SupervisorSamplingHeader';

class SupervisorSampling extends Component {
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
            <SupervisorSamplingHeader />
            
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
            <div className="form-row pd-12">
                <div className="col-3">
                <div className="form-group has-taskid">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="Task ID" />
                </div>
                </div>
                <div className="col-6 sample-flex">
                    <div className="sample-flex">
                        <span>From</span> <FormikDatePicker />
                    </div>
                    <div className="sample-flex">
                        <span>To</span> <FormikDatePicker />
                    </div>
                </div>
                <div className="col-1">
                    <h4 className="status">Status</h4>
                </div>
                <div className="col-2">
                <span className="checkbox-status status-inline">
                       <Checkbox className="inprogress" label='In Progress' /> 
                       <Checkbox label='Completed' /> 
                   </span>
                </div>
            </div>
            </div>
            <div className="sample-row">
            <div className="form-row">
                <div className="col-3">
                    <div className="form-group">
                    <input name="agentname" type="text" className='form-control' placeholder="Agent Name" />
                    </div>
                 </div>
                 <div className="col-3">
                    <div className="form-group">
                    <input name="projectnumber" type="text" className='form-control' placeholder="Project Number" />
                    </div>
                 </div>
                 <div className="col-2">
                     <button className="btn-sample" onClick={this.onOpenModal}>Create Sample</button>
                     <div className="col-6">
                     <Modal open={open} onClose={this.onCloseModal}>
                        <h2 className="sample_id">Sample ID</h2>
                        <div className="form-row">
                        <Field name="radioGroup"
                            options={["Every N Tasks"]}
                            component={FormikRadioGroup} />
                        </div>

                        <div className="form-row">
                        <Field name="radioGroup"
                            options={["100% in the Batch"]}
                            component={FormikRadioGroup} />
                        </div>

                        <div className="form-row">
                        <div className="col-4"><Field name="tasks" type="text" placeholder="5" /></div>
                        <span className="sample_create_tasks">Tasks</span>
                        </div>

                        <div className="form-row">
                            <div className="col-6">
                            <button className="btn-cancel">Cancel</button>
                            </div>
                            <div className="col-6">
                            <button className="btn-sample">Create Sample</button>
                        </div>
                    </div>
                       
                     </Modal>
                     </div>
                     <div className="col-6"></div>
                 </div>
                 <div className="col-4"></div>
            </div>
            </div>
 
            <table className="table so-table">
            <thead>
            <tr>
            <th>Sample ID</th> 
            <th>Creation Date</th> 
            <th>Size</th> 
            <th>Quantity</th> 
            <th>Export</th>
            </tr> 
            </thead>
            <tbody>
                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
                </td>
                </tr>

                <tr>
                <td>2345</td>
                <td>12/12/2019</td>
                <td>100</td>
                <td>96%</td>
                <td>
                    <span>Csv/Json</span><DeleteIcon />
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

export default SupervisorSampling;