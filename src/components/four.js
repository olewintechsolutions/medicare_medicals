import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserMd, FaHeadset, FaShieldAlt, FaClock } from 'react-icons/fa';
import '../styles/four.css'; // Import custom CSS file

const FourthContainer = () => {
  return (
    <Container fluid className="fourth-container text-center py-5">
      <h1 className="main-title">why Choose us</h1>
      <h2 className="sub-heading">Bringing Healthcare At Your Doorsteps</h2>

      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="info-card">
            <div className="icon-container">
              <FaUserMd className="info-icon" />
            </div>
            <Card.Body>
              <Card.Title>Certified Doctors</Card.Title>
              <Card.Text>We provide highly qualified and certified doctors for your needs.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="info-card">
            <div className="icon-container">
              <FaShieldAlt className="info-icon" />
            </div>
            <Card.Body>
              <Card.Title>Protective & Professional</Card.Title>
              <Card.Text>We ensure complete protection and professionalism in healthcare.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="info-card">
            <div className="icon-container">
              <FaHeadset className="info-icon" />
            </div>
            <Card.Body>
              <Card.Title>24x7 Support</Card.Title>
              <Card.Text>Our support team is available 24/7 to help you with any queries.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="info-card">
            <div className="icon-container">
              <FaClock className="info-icon" />
            </div>
            <Card.Body>
              <Card.Title>On-Time Services</Card.Title>
              <Card.Text>We ensure timely delivery of healthcare services at your doorstep.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthContainer;
