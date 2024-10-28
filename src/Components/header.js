import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; 

const PipHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={logo} // Logo URL
            alt="Logo"
            style={{ 
              borderRadius: '100%', // Keep the circular shape
              marginRight: '8px', // Space between logo and text
              width: '40px', // Adjust the width as needed
              height: '40px' // Adjust the height as needed
            }}
          />
          <span>PipTrip</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#plan">Plan</Nav.Link>
            <Nav.Link href="#review">Review</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#todo">To-Do</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Button variant="outline-primary" className="ms-3" href="#login">
            {/* <Nav.Link href="#loginsignup">LoginXSignUp</Nav.Link> */}
              Login / Sign In
            </Button>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PipHeader;
