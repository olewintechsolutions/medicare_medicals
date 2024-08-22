import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faPills, faUserMd } from '@fortawesome/free-solid-svg-icons';
import '../styles/consultant.css';
import consultant from '../images/softwareimg.png'
const ConsultantPage = () => {
  return (
    <div>
      <section className="consultant-header py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={consultant} alt=""/>
            </Col>
            <Col md={6}>
              <h1 className="text-primary">Medical Consultation and Pharmacy Services</h1>
              <p>
                Our consultants are here to provide you with expert advice and the best medical services to help
                you maintain your health and well-being. Visit our pharmacy for a wide range of pharmaceutical products.
              </p>
              <p>Approach our medical store today for top-notch service and healthcare consultation tailored to your needs.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consultation-services py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100 text-center p-4 shadow-sm">
                <Card.Body>
                  <FontAwesomeIcon icon={faStethoscope} size="4x" style={{ color: '#28a745' }} />
                  <Card.Title className="my-3 text-primary">Consultation Services</Card.Title>
                  <Card.Text>
                    Get the best medical consultations with our certified doctors. Expert advice tailored to your health needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100 text-center p-4 shadow-sm">
                <Card.Body>
                  <FontAwesomeIcon icon={faPills} size="4x" style={{ color: '#28a745' }} />
                  <Card.Title className="my-3 text-primary">Pharmacy Services</Card.Title>
                  <Card.Text>
                    Access a wide variety of pharmaceutical products and health supplements from our trusted pharmacy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100 text-center p-4 shadow-sm">
                <Card.Body>
                  <FontAwesomeIcon icon={faUserMd} size="4x" style={{ color: '#28a745' }} />
                  <Card.Title className="my-3 text-primary">Expert Consultants</Card.Title>
                  <Card.Text>
                    Our healthcare consultants provide personalized advice and solutions to help you manage your health better.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ConsultantPage;
