import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/ourservices.css'; // Custom CSS for hover effect and styling

// Import images
import service1 from '../images/CAPSULE.jpg';
import service2 from '../images/Heart-Health.jpg';
import service3 from '../images/consult-min.jpg';
import service4 from '../images/direct-contact.jpg';
import service5 from '../images/logo1.jpg';
import service6 from '../images/softwareimg.png';
import service7 from '../images/syringe.png';
import service8 from '../images/Syringe-needle.jpg';
import service9 from '../images/Doctors.jpg';
import service10 from '../images/medicines1.png';
import service11 from '../images/png-clipart-stethoscope-medicine-heart-heart-heart-medicine.png';
import service12 from '../images/png-transparent-medicines-medications-pills-capsule-thumbnail.png';

// Dummy data for cards (replace with your actual data)
const servicesData = [
  { id: 1, imgSrc: service1 },
  { id: 2, imgSrc: service2 },
  { id: 3, imgSrc: service3 },
  { id: 4, imgSrc: service4 },
  { id: 5, imgSrc: service5 },
  { id: 6, imgSrc: service6 },
  { id: 7, imgSrc: service7 },
  { id: 8, imgSrc: service8 },
  { id: 9, imgSrc: service9 },
  { id: 10, imgSrc: service10 },
  { id: 11, imgSrc: service11 },
  { id: 12, imgSrc: service12 },
];

const OurServices = () => {
  const [showMore, setShowMore] = useState(false);

  const initialServices = servicesData.slice(0, 3); // Initial 3 services
  const moreServices = servicesData.slice(3); // Additional services

  return (
    <section className="our-services-section py-5">
      <Container>
        <h1 className="text-center mb-4"> Health Care Advices </h1>
        <Row>
          {initialServices.map((service) => (
            <Col key={service.id} md={4} sm={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src={service.imgSrc} alt={service.title} />
                <Card.Body>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {showMore &&
            moreServices.map((service) => (
              <Col key={service.id} md={4} sm={6} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Img variant="top" src={service.imgSrc} alt={service.title} />
                  <Card.Body>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text className="service-description">{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        {!showMore && (
          <div className="text-center mt-4">
            <Button variant="primary" onClick={() => setShowMore(true)}>
              More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurServices;
