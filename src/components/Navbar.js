import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../images/brandlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone } from 'react-icons/fa';
import '../styles/navbar.css';

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="bg-success sticky-top navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4 text-light d-flex align-items-center">
          <img
            alt="Medicare Logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center me-3"
          />
          Medicare Medicals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto fw-bold gap-2">
            <Nav.Link className="text-light" href="/">Home</Nav.Link>
            <Nav.Link className="text-light" href="/services">Services</Nav.Link>
            <Nav.Link className="text-light" href="/consultant">Consultant</Nav.Link>
            <Nav.Link className="text-light" href="/branches">Branches</Nav.Link>
            <Nav.Link className="text-light" href="/stores">Stores</Nav.Link>
            <Nav.Link className="text-light" href="/about">About Us</Nav.Link>
            <Nav.Link className="text-light" href="/contact">Contact Us</Nav.Link>
            <Button className="btn btn-light text-center ">
            <FaPhone /> +91 94920 77949
          </Button>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
