
 import logo from '../images/mcm.png';
import '../App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-success text-light py-5 justify-content-md-center">
      <Container>
        <Row>
		<Col md ={3}>
			<img src={logo} alt="/"
			style={{
				width:"150px",
				height:"50px",
				display:"flex",
				alignItems:"center",
				

			}}
			/> 
					<h1 className="text-left fw-bold fs-3 text-dark">Medicare Medicals</h1>					
		</Col>

          <Col md={3}>
			      <h5 className="text-warning " style={{color:"#ffc72c"}}>Health Products</h5>
        <ul className=" list-unstyled">
          <li>For Kids & Children</li>
          <li>First Aid</li>
          <li>Treatments</li>
          <li>Injuries</li>
        </ul>
          </Col>

          <Col md={3}>
			      <h5 className="text-warning " style={{color:"#ffc72c"}}>Services</h5>
        <ul className=" list-unstyled">
          <li>Health Checkups</li>
          <li>Doorstep Services</li>
          <li>Home Cares</li>
          
        </ul>
          </Col>
         
          <Col md={3}>
            <h5 className='fw-bold' style={{color:"#ffc72c"}}>Contact Us</h5>
          
          <a class=" fs-6 text-light " href ="https://mail.google.com/mail/u/0/#compose">medicaremedicals@gmail</a>
            <address>
              Phone: +91 94920 77949<br />
              08571 - 295559<br/>
              +08571 352739 <br/>
             
            </address>
          </Col>
		       <Col md={3}>
            <h5 className='fw-bold' style={{color:"#ffc72c"}}>Connect With Us</h5>
            <ul className="row d-flex">
              <li className="me-3 list-unstyled py-3">
                <a href="https://mail.google.com/mail/u/0/#compose" className="fs-6 text-light">
                  Gmail
                </a>
              </li>
            
              <li className='me-3 list-unstyled'>
                <a href="https://wa.me/8904380276" className='fs-6 text-light' >
              WhatsApp
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
          <h5 className="text-warning">Address</h5>
        <ul className="  list-unstyled">
          <li>Medicare Medicals <br/>
            <li>Near Mallikarjun Circle </li>
            <li>Opposite to BSNL Office</li>
            <li>Madanapalle -517325</li>
          </li>
        </ul>
          
          </Col>
          <Col md={3}>
          <h5 class="text-warning">Business Timings</h5>
          <ul className='list-unstyled'>
            <li>Monday - 8AM - 11PM</li>
            <li>Tuesday- 8AM - 11PM </li>
            <li>Wednesday- 8AM - 11PM</li>
            <li>Thursday - 8AM - 11PM</li>
            <li>Friday- 8AM - 11PM </li>
            <li>Saturday- 8AM - 11PM</li>
            <li>Sunday- 8AM - 11PM </li>

            
          </ul>
          </Col>
        </Row>
      </Container>
    </footer>

    
  );
};

export default Footer;

