import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col, 
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormikRadioGroup from '../Profile/FormikRadioGroup';
import Header from '../Header/Header';
import SetupProjectHeader from './SetupProjectHeader';

class SetupProjectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
      }
      

    render() { 
        const {isOpen} = this.state;
        
        return ( 
            <div>
            <Header />
            <SetupProjectHeader />
           <Row>
                <Col md="2"></Col>
                <Col md="8" className="production-form">
           <Formik
                initialValues={{
                    input: '',
                    name: '',
                    url: '',
                    taskid: ''
                }}
                validationSchema={Yup.object().shape({
                    input: Yup.string()
                        .required('Input is required'),
                    name: Yup.string()
                        .required('Name is required'),
                    url: Yup.string()
                        .required('URL is required'),
                    taskid: Yup.string()
                        .required('TaskID is required')
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="input" className="col-setup-label">Input:</label>
                        </div>
                        <div className="col-10">
                            <Field name="input" type="text" placeholder="Format" className={'form-control pr-input' + (errors.input && touched.input ? ' is-invalid' : '')} />
                            <ErrorMessage name="input" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="name" className="col-setup-label">Name:</label>
                        </div>
                        <div className="col-10">
                            <Field name="name" type="text" placeholder="String" className={'form-control pr-input' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="url" className="col-setup-label">URL:</label>
                        </div>
                        <div className="col-10">
                            <Field name="url" type="text" placeholder="URL" className={'form-control pr-input' + (errors.url && touched.url ? ' is-invalid' : '')} />
                            <ErrorMessage name="url" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="taskid" className="col-setup-label">TaskID:</label>
                        </div>
                        <div className="col-10">
                            <Field name="taskid" type="text" placeholder="String" className={'form-control pr-input' + (errors.taskid && touched.taskid ? ' is-invalid' : '')} />
                            <ErrorMessage name="taskid" component="div" className="invalid-feedback" />
                        </div>
                        </div>

                        <div className="form-row">
                        <div className="col-12 br-bottom"></div>
                        </div>

                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="workflow" className="col-workflow-label">Workflow</label>
                        </div>
                        <div className="col-8"></div>
                        <div className="col-2">
                        <Button className="add-btn"
                        startIcon={<AddIcon />}
                        />
                        </div>
                        </div>

                        <div className="form-row">
                        <div className="col-8">
                        <div className="workflow-label">
                        <Checkbox label='Production' /> 
                        <Field
                            name="radioGroup"
                            options={["Show Agent Name", "Shoq Task ID"]}
                            component={FormikRadioGroup}
                           />
                        <ErrorMessage name="type" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="col-4"></div>
                        </div>
                           
                        <div className="form-row">
                        <div className="col-8">
                        <div className="workflow-label">
                        <Checkbox className="check" label='Review' /> 
                        <Field
                            name="radioGroup"
                            options={["Show Agent Name", "Shoq Task ID"]}
                            component={FormikRadioGroup}
                           />
                            <ErrorMessage name="type" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="col-4"></div>
                        </div>
                        
                        <div className="form-row">
                        <div className="col-2">
                            <button type="submit" className="submit-save">Save</button>
                        </div>
                        <div className="col-10"></div>
                        </div>
                    </Form>
                )}
            </Formik>
            </Col>
            <Col md="2"></Col>
            </Row>
           </div>
         );
    }
}

export default SetupProjectInput;