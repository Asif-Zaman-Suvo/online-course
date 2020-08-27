import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>

            <>
  <Navbar sticky="top"  bg="dark" variant="dark">
    
    <Nav className="m-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Courses">Courses</Nav.Link>
      <Nav.Link href="#Pricing">Pricing</Nav.Link>
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
</>
        </div>
    );
};

export default Header;