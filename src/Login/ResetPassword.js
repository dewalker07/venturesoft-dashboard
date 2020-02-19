import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Col, Row, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './login.css';

import logo from '../assets/logo.png';

class ResetPassword extends React.Component {
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="nav"><img src={logo} alt="VentureSoft Global" /></NavbarBrand>
              </Navbar>
            <Row>
                <Col md="4"></Col>
                <Col md="4" className="resetpwd-form">
            <Formik
                initialValues={{
                    email: ''
                    
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Email ID</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
            </Col>
            <Col md="4"></Col>
            </Row>
            </div>
            
        )
    }
}

export default ResetPassword; 