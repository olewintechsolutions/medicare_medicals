import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaPrescriptionBottleAlt, FaStethoscope, FaTruck, FaClinicMedical, FaSyringe } from 'react-icons/fa'; // Medical icons
import medicalImage from '../images/direct-contact.jpg'; // Example image
import '../styles/medicalservices.css';
const MedicalServices = () => {
  return (
    
<>

<section className="responsive-container" style={{ padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} className="align-items-center">
          <h2 className="mb-4 text-center p-3 text-md-start text-success">Our Medical Services</h2>
          <ListGroup variant="flush" className='p-3 '>
            <ListGroup.Item className="d-flex align-items-center">
              <FaPrescriptionBottleAlt className="me-3 text-success" size={30} />
              <span>Prescription Medicines</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FaStethoscope className="me-3 text-primary" size={30} />
              <span>Doctor Consultations</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FaTruck className="me-3 text-danger" size={30} />
              <span>Doorstep Delivery</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FaClinicMedical className="me-3 text-warning" size={30} />
              <span>In-Clinic Appointments</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FaSyringe className="me-3 text-info" size={30} />
              <span>Vaccination Services</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
          <Col lg={6} md={12} className="mb-4 mb-lg-0 mx-auto align-items-center">
            <img
              src={medicalImage}
              alt="Sample"
              className="img-fluid"
              style={{ width: '60%', height: 'auto', borderRadius: '10px' }}
            />
          </Col>

         
        </Row>
      </Container>
    </section>
  
</>

   
  );
};

export default MedicalServices;
