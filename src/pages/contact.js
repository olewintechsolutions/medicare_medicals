import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Branches from './branches';

const ContactPage = () => {
  return (
<>
<Branches/>
<Container>
      <Row className="justify-content-center p-3 m-3">
        <Col md={6}>
          <h2 className='fw-bold text-center'>Get In Touch </h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="Name"  />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button className='btn btn-primary w-auto mx-auto m-4 ' type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
      <section className="google-map-section py-5">
      <Container>
        <h1 className="text-center fs-2 fw-bold mb-5">Our Location</h1>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=medicare+medicals+madanapalle+andhrapradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
</>

   
  );
};

export default ContactPage;
