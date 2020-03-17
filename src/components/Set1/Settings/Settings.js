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
import ProfileHeader from '../Profile/ProfileHeader';

import FormikRadioGroup from './FormikRadioGroup';

import './settings.css';



class Settings extends React.Component {
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

        const Schema = Yup.object().shape({
            password: Yup.string().required("This field is required"),
            changepassword: Yup.string().when("password", {
              is: val => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password doesn't match"
              )
            })
          });
          
        
        return ( 
            <div>
            <Header />
            <ProfileHeader />
           <Row>
                <Col md="2"></Col>
                <Col md="8" className="settings-form">
                <Formik
                initialValues={{
                    password: "",
                    changepassword: ""
                }}
                validationSchema={Schema}
                onSubmit={() => {}}
                >
                {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                    return (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="passowrd">New Password</label>
                        <input
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        className="pwd"
                        />
                        <span className="error" style={{ color: "red" }}>
                        {errors.password}
                        </span>

                        <label htmlFor="passowrd">Confirm Password</label>
                        <input
                        type="password"
                        name="changepassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.changepassword}
                        className="pwd"
                        />
                        <span className="error" style={{ color: "red" }}>
                        {errors.changepassword}
                        </span>
                        <div className="br-bottom"></div>
                        <div className="twofactor-auth">
                        <label htmlFor="twofactorauthentication" className="pd-twofactor">Two Factor Authentication</label>
                        <Field
                            name="radioGroup"
                            options={["Enable", "Disable"]}
                            component={FormikRadioGroup}
                        />
                        <div>
                          <button type="reset" className="reset">Reset</button>
                        </div>
                        </div>
                    </Form>
                    );
                }}
                </Formik>
            </Col>
            <Col md="2"></Col>
            </Row>
           </div>
         );
    }
}

export default Settings;