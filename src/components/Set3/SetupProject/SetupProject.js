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

import Header from '../Header/Header';
import SetupProjectHeader from './SetupProjectHeader';

class SetupProject extends React.Component {
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
                    clientname: '',
                    projectcode: '',
                    trainingmaterial: '',
                    type: ''
                }}
                validationSchema={Yup.object().shape({
                    clientname: Yup.string()
                        .required('Client Name is required'),
                    projectcode: Yup.string()
                        .required('Project code is required'),
                    trainingmaterial: Yup.string()
                        .required('Training Materail is required'),
                    type: Yup.string()
                        .required('Type is required')
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="clientname" className="col-setup-label">Client name:</label>
                        </div>
                        <div className="col-10">
                            <Field name="clientname" type="text" placeholder="XXXX" className={'form-control pr-input' + (errors.clientname && touched.clientname ? ' is-invalid' : '')} />
                            <ErrorMessage name="clientname" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="projectcode" className="col-setup-label">Project code:</label>
                        </div>
                        <div className="col-10">
                            <Field name="projectcode" type="text" placeholder="XYZ" className={'form-control pr-input' + (errors.projectcode && touched.projectcode ? ' is-invalid' : '')} />
                            <ErrorMessage name="projectcode" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="trainingmaterial" className="col-setup-label">Training Material:</label>
                        </div>
                        <div className="col-10">
                            <Field name="trainingmaterial" type="text" placeholder="docs.google.com" className={'form-control pr-input' + (errors.trainingmaterial && touched.trainingmaterial ? ' is-invalid' : '')} />
                            <ErrorMessage name="trainingmaterial" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="type" className="col-setup-label">Type:</label>
                        </div>
                        <div className="col-10">
                            <Field name="type" type="text" placeholder="Training" className={'form-control pr-input' + (errors.type && touched.type ? ' is-invalid' : '')} />
                            <ErrorMessage name="type" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                            <div className="col-2"></div>
                        <div className="col-10">
                            <button type="submit" className="submit-answer">Submit Answer</button>
                        </div>
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

export default SetupProject;