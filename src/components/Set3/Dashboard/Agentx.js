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

import '../Project/project.css';



class PmAgentx extends React.Component {
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
            <Navbar expand="md" className="prf-view">
              <Nav className="d-md-down-none" navbar>
              <NavItem>
                  <h4 className="role">Role</h4>
                </NavItem> 
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmsupervisorx" activeClassName="active" className="nav-link" >Supervisor</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmagentx" activeClassName="active" className="nav-link">Agent</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink tag={RRNavLink} to="/pmreviewerx" activeClassName="active" className="nav-link">Reviewer</NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-btn">
                  <button className="btn-stopwork"><Link className="btn-stop" to="/pmsupervisor">Stop Work</Link></button>
                </Nav>
           </Navbar>
           <Row>
                <Col md="2"></Col>
                <Col md="8" className="production-form">
           <Formik
                initialValues={{
                    imageurl: '',
                    taskid: '',
                    trainingmaterial: '',
                    comments: ''
                }}
                validationSchema={Yup.object().shape({
                    imageurl: Yup.string()
                        .required('Image url is required'),
                    taskid: Yup.string()
                        .required('Task ID is required'),
                    trainingmaterial: Yup.string()
                        .required('Training Materail is required'),
                    comments: Yup.string()
                        .required('Comments is required')
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                    <div className="form-row">
                      <div className="col-2">
                      <label htmlFor="imageurl" className="col-review-label">Image Url:</label>
                      </div>
                      <div className="col-10">
                      <Field name="imageurl" type="text" placeholder="www.images.com" className={'form-control pr-input' + (errors.imageurl && touched.imageurl ? ' is-invalid' : '')} />
                          <ErrorMessage name="imageurl" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                       
                      <div className="form-row">
                        <div className="col-2">
                           <label htmlFor="taskid" className="col-review-label">Task ID:</label>
                        </div>
                        <div className="col-10">
                          <Field name="taskid" type="text" placeholder="www.images.com" className={'form-control pr-input' + (errors.taskid && touched.taskid ? ' is-invalid' : '')} />
                          <ErrorMessage name="taskid" component="div" className="invalid-feedback" />
                        </div>        
                      </div>

                      <div className="form-row">
                        <div className="col-2">
                        <label htmlFor="trainingmaterial" className="col-review-label">Training Material:</label>
                        </div>
                        <div className="col-10">
                        <Field name="trainingmaterial" type="text" placeholder="docs.google.com" className={'form-control pr-input' + (errors.trainingmaterial && touched.trainingmaterial ? ' is-invalid' : '')} />
                          <ErrorMessage name="trainingmaterial" component="div" className="invalid-feedback" />
                        </div>
                      </div>

                      <div className="form-row">
                      <Input type="textarea" name="text" placeholder="Image annotation tool with image will load here for annotating" />
                      </div>

                      <div className="form-row">
                          <label htmlFor="comments" className="col-form-label">Comments</label>
                          <Input type="textarea" name="text" className="comment-textbox" placeholder="Write any comments for the task or if any specific requirement" />
                          <ErrorMessage name="comments" component="div" className="invalid-feedback" />
                      </div>

                      <button className="btn-submit-ans">Submit Answer</button>
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

export default PmAgentx;