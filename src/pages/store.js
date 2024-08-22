import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import logo1 from '../images/softwareimg.png';
import logo2 from '../images/truck.png';
import '../styles/store.css';

const Store = () => {
  return (
    <Container className="my-4 py-4">
      <Row className="align-items-center justify-content-center">
        {/* First Column with Logo and Description */}
        <Col xs={12} md={6} className="mb-4">
          <div className="content-box p-4 text-center">
            <Image src={logo1} alt="Pharmacy Store Logo" width={150} height={150} fluid />
            <h5 className="mt-3">Pharmacy Store</h5>
            <p className="fw-bold">We are Delivering Online Medicine/Products</p>
          </div>
        </Col>

        {/* Second Column with Contact Info */}
        <Col xs={12} md={6} className="mb-4">
          <div className="content-box p-4 text-center">
            <Image src={logo2} alt="Delivery Truck" width={100} height={100} fluid />
            <p className="mt-3">E-Store is under development...</p>
            <p>Contact Us:</p>
            <ListGroup as="ul" className="list-unstyled">
              <ListGroup.Item as="li" className="text-primary">+91 94920 77949</ListGroup.Item>
              <ListGroup.Item as="li" className="text-primary">+08571- 295559</ListGroup.Item>
              <ListGroup.Item as="li" className="text-primary">medicaremedicals@gmail.com</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
