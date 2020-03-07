import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Col, Row, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';

import logo from '../../../assets/logo.png';

class ActivationLinkManage extends React.Component {
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="nav"><img src={logo} alt="VentureSoft Global" /></NavbarBrand>
              </Navbar>
            <Row>
                <Col md="3"></Col>
                <Col md="6" className="resetpwd-form">
                    <div className="form-row">
                        <div className="form-group">
                            <p className="pwd-instructions">Activation Link has been sent to your registered email id</p>
                        </div>
                    </div>
               
            </Col>
            <Col md="3"></Col>
            </Row>
            </div>
            
        )
    }
}

export default ActivationLinkManage; 