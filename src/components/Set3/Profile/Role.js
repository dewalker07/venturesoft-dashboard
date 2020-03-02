import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Col, 
    Row   
  } from 'reactstrap';
import { Checkbox } from 'semantic-ui-react'
import Header from '../Header/Header';
import ProHeaderPM from './ProHeader';

class PMRole extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
              <Header />
              <ProHeaderPM />
              <Row>
                <Col md="4"></Col>
                <Col md="4" className="profile-form">
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
                        <Checkbox label='Production Agent' /> 
                        </div> 
                        <div className="form-row">
                        <Checkbox label='Review Agent' /> 
                        </div>
                        <div className="form-row">
                        <Checkbox label='Supervisor' /> 
                        </div>  
                        <div className="form-row">
                        <Checkbox label='Project Manager / Admin' /> 
                        </div>             
                    </Form>
                )}
            </Formik>
            </Col>
            <Col md="4"></Col>
            </Row>
            </div>
         );
    }
}
 
export default PMRole;
