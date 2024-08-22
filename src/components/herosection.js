import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/herosection.css'; // Custom CSS for text animations

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel fade indicators={false} controls={false} interval={3000} className="carousel-section">
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="carousel-image image1"></div>
          <Carousel.Caption className="text-container">
            <h1 className="animated-text">Doctor Consultation</h1>
            <p className="animated-text">Book your consultation online with top doctors.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="carousel-image image2"></div>
          <Carousel.Caption className="text-container">
            <h1 className="animated-text">Medical Store</h1>
            <p className="animated-text">Find medicines and medical equipment easily.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="carousel-image image3"></div>
          <Carousel.Caption className="text-container">
            <h1 className="animated-text">Online Consultation</h1>
            <p className="animated-text">Connect with doctors remotely via online services.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <div className="carousel-image image4"></div>
          <Carousel.Caption className="text-container">
            <h1 className="animated-text">Doorstep Delivery</h1>
            <p className="animated-text">Get medicines delivered straight to your home.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 5 */}
        <Carousel.Item>
          <div className="carousel-image image5"></div>
          <Carousel.Caption className="text-container">
            <h1 className="animated-text">Online Appointments</h1>
            <p className="animated-text">Schedule appointments conveniently from home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
