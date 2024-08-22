import React from 'react'
import logo from '../images/medicallogo.jpg'
import { Container, Row, Col } from 'react-bootstrap';
function about() {
  
  return (
    <>
     <div class="heading_container">
    <h2 class =" text-dark text-center  p-3 m-3 rounded mx-auto w-50 d-block text-decoration-underline">
      About <span>Us</span>
    </h2>
  </div>
  
  <section class="row d-flex p-2 m-3">
    <div class="row">
      <div class="col">
        <img class="rounded mx-auto row w-50  pb-4" alt="/" src={logo}/> 
        <h1 class="text-center fw-bold text-primary">Medicare Medicals</h1>   
      </div>
    </div>
  
  </section>

  <section class="about_section layout_padding ">
    <div class="container justify-content-center ">
      <div class="row">
        <div class="col">
          <div class="detail-box">
           
            <p> Welcome to Medicare Medicals Store, your one-stop destination for all your healthcare and medical supply needs. We are dedicated to providing you with the highest quality products and a seamless shopping experience.</p>
                            
              Our mission at Medicare Medicals Store is to improve the quality of life for individuals and the effectiveness of healthcare professionals by offering a wide selection of medical supplies, equipment, and healthcare products. We strive to make essential medical items easily accessible to everyone, ensuring that you can confidently manage your health and well-being.
              

               We source our products from trusted manufacturers to ensure they meet the highest standards of quality and safety.
              
              <p> Explore our extensive inventory, featuring a comprehensive range of medical supplies, from everyday essentials to specialized equipment.</p>
              
              <p> Our knowledgeable team is here to provide you with guidance and assistance in choosing the right products for your specific needs.</p>
              

               <p> Enjoy the convenience of shopping online 24/7, with secure payment options and fast, reliable shipping.</p>
              
              <p>Your satisfaction is our top priority. We are committed to delivering exceptional customer service and support at every step of your shopping journey.</p>
              
              
              <p>At Medicare Medicals Store, we believe in promoting health and well-being for all.
               Whether you're a healthcare professional, a caregiver, or an individual seeking medical supplies, we invite you to join our community.
                Together, we can make healthcare more accessible and improve the lives of people around the world.
              you for choosing Medicare Medicals Store as your trusted partner in healthcare.</p> <br></br>

              <p> <strong class=" text-center "> We look forward to serving you and contributing to your journey towards better health.</strong> 
              </p>
           
          </div>
        </div>
      </div>
    </div>
    
  </section>
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
  )
}

export default about;