import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserMd, FaHospital, FaStethoscope, FaHeartbeat, FaClipboardCheck, FaAmbulance } from 'react-icons/fa';
import '../styles/fifth.css'; // Import custom CSS

const FifthContainer = () => {
  return (
    <Container fluid className="fifth-container text-center py-5 col-11 mx-auto">
      <h1 className="main-title">Better Doctors. Better Care. Better Health.</h1>
      <p className="description">We provide top-tier medical services with a focus on the well-being of our patients. Our team of experts ensures you receive the best care possible, leading to better health outcomes.</p>
      <Button className="contact-btn" href='/contact' >Contact Us</Button>

      <Row className="mt-5">
        {/* First Column */}
        <Col xs={12} md={6}>
          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaUserMd className="info-icon me-3" />
              <div>
                <Card.Title>Qualified Doctors</Card.Title>
                <Card.Text>Highly trained and certified doctors.</Card.Text>
              </div>
            </div>
          </Card>

          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaStethoscope className="info-icon me-3" />
              <div>
                <Card.Title>Advanced Equipment</Card.Title>
                <Card.Text>State-of-the-art medical equipment.</Card.Text>
              </div>
            </div>
          </Card>

          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaHeartbeat className="info-icon me-3" />
              <div>
                <Card.Title>Heart Specialists</Card.Title>
                <Card.Text>Experienced cardiologists for all your heart care needs.</Card.Text>
              </div>
            </div>
          </Card>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={6}>
          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaHospital className="info-icon me-3" />
              <div>
                <Card.Title>Modern Facilities</Card.Title>
                <Card.Text>Our hospitals are equipped with modern facilities.</Card.Text>
              </div>
            </div>
          </Card>

          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaClipboardCheck className="info-icon me-3" />
              <div>
                <Card.Title>Comprehensive Checkups</Card.Title>
                <Card.Text>Full health checkups to ensure overall well-being.</Card.Text>
              </div>
            </div>
          </Card>

          <Card className="info-card mb-4">
            <div className="d-flex align-items-center">
              <FaAmbulance className="info-icon me-3" />
              <div>
                <Card.Title>24/7 Emergency Services</Card.Title>
                <Card.Text>We are available round the clock for emergencies.</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthContainer;
