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
import AttachmentIcon from '@material-ui/icons/Attachment';
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
       
            <div className="form-row">
            <div className="col-3"></div>
            <div className="col-6">
              <label className="input_name_url">Input Name,url </label>
              <div className="form-group has-search">
                 <div className="fa fa-paperclip form-control-feedback"></div>
                  <div className="upload-input"><input type="text" className="form-control" placeholder="Attachfile" />
                  <button className="btn-upload">Upload</button></div>
              </div>
            </div>
            <div className="col-3">
            </div>
            </div>
          
             
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