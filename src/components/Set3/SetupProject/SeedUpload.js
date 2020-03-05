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

class SeedUpload extends React.Component {
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
            <SetupProjectHeader />
           <Row>
                <Col md="3"></Col>
                <Col md="6" className="production-form">
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
                        <div className="form-row">
                            <div className="col-3">
                            <label htmlFor="Input Name,Url" className="col-workflow-label">Input Name,Url</label>
                            </div>
                        </div>

                    <Field 
                       name="seedupload" 
                       type="file" 
                       placeholder="Attach File" 
                       className={'form-control pr-input' + (errors.url && touched.url ? ' is-invalid' : '')} />
                    </Form>
                )}
            </Formik>
            </Col>
            <Col md="3"></Col>
            </Row>
            <div className = "table-data">

            <table className="table pm-table">
            <thead>
            <tr>
            <th> Batch No </th> 
            <th> Task Uploaded </th> 
            <th> Uploaded By </th> 
            <th> Date </th> 
            <th> Time </th> 
            </tr> 
            </thead>
            <tbody>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
                <tr>
                    <td>23456</td>
                    <td>999</td>
                    <td>Project Manager 1</td>
                    <td>22/10/2019</td>
                    <td>05:35:00 PM</td>
                </tr>
          

            </tbody> 
            </table> 
            </div>

           </div>
         );
    }
}

export default SeedUpload;