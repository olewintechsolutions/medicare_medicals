import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/about.css';

const AboutImages = () => {
  return (
    <section className="about-images py-5">
      <Container>
        <Row>
          {/* Gallery */}
          <div className='container'>
            <h1 className="text-center fs-2 fw-bold pt-4">Our Store</h1>

            <div className="row justify-content-center d-flex">
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNkA8xVjToVGplBlZyF4ufNzG_gWfais8zC-WmC=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNedKv4LFZjnynUq5QbxHS9I9tyfwzYxsHssD4k=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMMofWmZ44Unv6-t_y9IcpXtf2fq72WbajkmRx2=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNEassyjXKC5mDhXKazd1Pi3gTNeZoUUIWQq3Qk=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNZ8JuoaWtsRvJH5LkmOZrQHU79J0hAxYqO-jNz=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipO1PA6YJ8ccU-wJAZlL1dGg04hEzt_R9wXQq4LB=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMILi70d9aHkbZuGRpVP8AAbAgLM8-8_C9AgX8m=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 p-3">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipPeI8sSKe01s8oAuv_9YtPTM6eSlAskMukjHgCT=s1360-w1360-h1020"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutImages;
