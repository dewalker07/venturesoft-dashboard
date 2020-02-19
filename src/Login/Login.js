import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Col, Row, Nav, Navbar, NavItem, NavbarBrand } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './login.css';

import logo from '../assets/logo.png';

class Login extends React.Component {
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="nav"><img src={logo} alt="VentureSoft Global" /></NavbarBrand>
              </Navbar>
            <Row>
                <Col md="4"></Col>
                <Col md="4" className="login-form">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    facode: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Password must be at least 6 characters')
                        .required('Password is required')
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
                    facode: Yup.number()
                         .min(4, '2FACODE must be 4 digit number')
                         .required('Code required')
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
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="facode" className="col-form-label">2FACODE</label>
                            <Field name="facode" type="facode" className={'form-control' + (errors.facode && touched.facode ? ' is-invalid' : '')} />
                            <ErrorMessage name="facode" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2" to="/header">Sign In</button>
                            {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                            <Link to="/login/resetpassword" className="forgot-pwd">Forgot password?</Link>
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

export default Login; 