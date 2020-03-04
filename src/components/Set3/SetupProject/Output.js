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

class Output extends React.Component {
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
                            <label htmlFor="input" className="col-output-label">Output:</label>
                        </div>
                        <div className="col-9">
                            <Field name="input" type="text" placeholder="Format" className={'form-control' + (errors.input && touched.input ? ' is-invalid' : '')} />
                            <ErrorMessage name="input" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-1">
                           <Button className="add-btn" startIcon={<AddIcon />} />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="col-12 br-bottom"></div>
                        </div>

                        <div className="form-row">
                         <div className="col-2">
                            <label htmlFor="input" className="col-output-label">Annotation Tools</label>
                        </div>
                        <div className="col-10">
                        <Checkbox className="check-production" label='Bounding Box' />
                        <Checkbox className="check-production" label='Polygon' />
                        <Checkbox className="check-production" label='Line' />
                        <Checkbox className="check-production" label='Point' />
                        <Checkbox className="check-production" label='Arrow' />  
                        </div>
                        <div className="col-2"></div>
                        <div className="col-10">
                        <Checkbox className="check-production" label='Cuboid' />
                        <Checkbox className="check-production" label='Measuring Tool' />
                        </div>
                        </div>
                       
                        <div className="row">
                            <div className="col-2">
                            <label htmlFor="input" className="col-setup-label">Annotation</label>
                            </div>
                            <div className="col-6">
                            <Field name="input" type="text" placeholder="Building" className={'form-control annotation' + (errors.input && touched.input ? ' is-invalid' : '')} />
                            <Field name="input" type="text" placeholder="Car" className={'form-control annotation' + (errors.input && touched.input ? ' is-invalid' : '')} />
                            <Field name="input" type="text" placeholder="Motorcylce" className={'form-control annotation' + (errors.input && touched.input ? ' is-invalid' : '')} />
                            <ErrorMessage name="input" component="div" className="invalid-feedback" />
                            </div>
                            <div className="col-4"></div>
                        </div>

                        <div className="form-row">
                            <div className="col-2"></div>
                            <div className="col-6">
                              <button type="submit" className="output-save">Save</button>
                            </div>
                            <div className="col-4"> </div>
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

export default Output;