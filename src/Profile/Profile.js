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
import FormikDatePicker from './FormikDatePicker';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Selectbox from './Select';
import countryOptions from './countries';
import stateOptions from './states';
import cityOptions from './cities';

import Header from '../Header/Header';
import ProfileHeader from './ProfileHeader';

import logo from '../assets/logo.png';

import './profile.css';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, country: '' }
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
      }
      selectCountry (val) {
        this.setState({ country: val });
      }

    render() { 
        const {isOpen} = this.state;
        const { country } = this.state;
        
        return ( 
            <div>
            <Header />
            <ProfileHeader />
           <Row>
                <Col md="3"></Col>
                <Col md="6" className="profile-form">
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
                {({ errors, status, touched }) => (
                    <Form>
                        
                        <div className="form-group inline-block">
                            <label htmlFor="firstname" className="col-form-label">First Name</label>
                            <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group inline-block">
                            <label htmlFor="lastname" className="col-form-label">Last Name</label>
                            <Field name="lastname" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group inline-block">
                            <label htmlFor="email" className="col-form-label">Email ID</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group inline-block">
                            <label htmlFor="phonenumber" className="col-form-label">Phone Number</label>
                            <Field name="phonenumber" type="number" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group inline-block">
                            <label htmlFor="gender" className="col-form-label">Gender</label>
                            <button className="btn-male">
                            <i className="fas fa-male"></i>Male
                            </button>
                            <button className="btn-female">
                            <i className="fas fa-female"></i>Female
                            </button>
                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                            </div>
                        
                        <div className="form-group inline-block">
                            <label htmlFor="dateofbirth" className="col-form-label">Date Of Birth</label>
                            <FormikDatePicker />
                        </div>

                        <div className="form-group inline-block">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <Field name={"country"} options={countryOptions} component={Selectbox} />
                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group inline-block">
                            <label htmlFor="state" className="col-form-label">State</label>
                            <Field name={"state"} options={stateOptions} component={Selectbox} />
                            <ErrorMessage name="state" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group inline-block">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <Field name={"city"} options={cityOptions} component={Selectbox} />
                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group inline-block">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group inline-block">
                            <label htmlFor="zip" className="col-form-label">Zipcode</label>
                            <Field name="zip" type="number" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="zip" component="div" className="invalid-feedback" />
                        </div>
                        
                        
                    </Form>
                )}
            </Formik>
            </Col>
            <Col md="3"></Col>
            </Row>
           </div>
         );
    }
}

export default Profile;