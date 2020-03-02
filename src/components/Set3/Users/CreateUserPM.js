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
import FormikDatePicker from '../../Set1/Profile/FormikDatePicker';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Selectbox from '../../Set1/Profile/Select';
import countryOptions from '../../Set1/Profile/countries';
import stateOptions from '../../Set1/Profile/states';
import cityOptions from '../../Set1/Profile/cities';
// import FormikRadioGroup from '../../Set1/Settings/FormikRadioGroup';

import Header from '../Header/Header';
import CreateHeader from './CreateHeader';

import './user.css';



class CreateUserPM extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, country: '' }
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }
    selectCountry(val) {
        this.setState({ country: val });
    }

    render() {
        const { isOpen } = this.state;
        const { country } = this.state;

        return (
            <div>
            <Header />
            <CreateHeader />
           <Row>
                <Col md="3"></Col>
                <Col md="6" className="profile-form">
           <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    phonenumber: '',
                    gender: '',
                    dateofbirth: '2019-10-24T22:00:00.000Z',
                    country: '',
                    state: '',
                    city: '',
                    address: '',
                    zip: ''
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string()
                        .required('firstname is required'),
                    lastname: Yup.string()
                    .required('lastname is required'),
                    email: Yup.string()
                        .required('emial is required'),
                    phonenumber: Yup.number()
                    .min(10, 'Phonenumber must be 10 digit number')
                    .required('phonenumber is required'),
                    address: Yup.string()
                        .required('address is required'),
                    country: Yup.string()
                    .required('country is required'),
                    city: Yup.string()
                    .required('city is required'),
                    state: Yup.string()
                    .required('state is required'),
                    zip: Yup.number()
                    .required('emial is required')

                   
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="firstname" className="col-form-label">First Name</label>
                            <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastname" className="col-form-label">Last Name</label>
                            <Field name="lastname" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="email" className="col-form-label">Email ID</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="phonenumber" className="col-form-label">Phone Number</label>
                            <Field name="phonenumber" type="number" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="gender" className="col-form-label">Gender</label>
                            <button className="btn-male">
                            <i className="fas fa-male"></i>Male
                            </button>
                            <button className="btn-female">
                            <i className="fas fa-female"></i>Female
                            </button>
                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="col-6">
                            <label htmlFor="dateofbirth" className="col-form-label">Date Of Birth</label>
                            <FormikDatePicker />
                            <ErrorMessage name="dateofbirth" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <Field name={"country"} placeholder="Select Country" options={countryOptions} component={Selectbox} />
                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
                        </div>

                        <div className="col-6">
                            <label htmlFor="state" className="col-form-label">State</label>
                            <Field name={"state"} placeholder="Select State" options={stateOptions} component={Selectbox} />
                            <ErrorMessage name="state" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <Field name={"city"} placeholder="Select City" options={cityOptions} component={Selectbox} />
                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="zip" className="col-form-label">Zipcode</label>
                            <Field name="zip" type="number" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="zip" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-6"></div>
                        {/* <button type="submit">Create</button> */}
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

export default CreateUserPM;