import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../images/doctor-software.png';
const MedicalContainer = () => {
  return (
<>


    <section className="responsive-container" style={{ padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Image */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <img
              src={image}
              alt="Sample"
              className="img-fluid"
              style={{ width: '60%', height: 'auto', borderRadius: '10px' }}
            />
          </Col>

          {/* Right Column - Content */}
          <Col lg={6} md={12} className="align-items-center col-md-6 mx-auto ">
          <h1 className="fw-bold text-success">Medical and Pharmacy Solutions</h1>
            <p className="description">
              We provide comprehensive medical and pharmacy solutions
              <br />
              ensuring you have access to the best healthcare and services at your convenience.
            </p>
            <div className="buttons fs-3 text-success mb-3">
              Contact Us Today...
            </div>
            <div className="contact-info fs-5">
              <p>Call us: +91 94920 77949</p>
              <p>Email: <a href="mailto:medicaremedicals@gmail.com" className="text-primary">medicaremedicals@gmail.com</a></p>
            </div>
            <button className="btn btn-primary" href='/about'>Learn More</button>
          </Col>
        </Row>
      </Container>
    </section>
  </>  
  );
};

export default MedicalContainer;
