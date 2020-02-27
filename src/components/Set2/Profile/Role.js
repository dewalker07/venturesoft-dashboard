import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Col, 
    Row   
  } from 'reactstrap';

import Header from '../Header/Header';
import ProHeader from './ProHeader';

class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
              <Header />
              <ProHeader />
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
                        
                        <div className="form-row">
                           
                           
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
 
export default Role;
