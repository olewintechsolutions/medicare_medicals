import React, { useEffect, useRef } from 'react';
import '../styles/services.css'; 


const services = [
  { id: 1, title: 'Medicines', description: 'Order medicines online with doorstep delivery.' },
  { id: 2, title: 'Dr. Consultation', description: 'Book online consultations with top doctors.' },
  { id: 3, title: 'Medical Store', description: 'Find all medical store services at one place.' },
  { id: 4, title: 'Appointments', description: 'Schedule your medical appointments easily.' },
  { id: 5, title: 'Online Pharmacy', description: 'Access your medications from anywhere.' },
  { id: 6, title: 'Doorstep Delivery', description: 'Fast delivery of medicines at your doorstep.' }
];

const ServicePage = () => {
  const gridRefs = useRef([]);

  // Use IntersectionObserver to add the translate effect when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    gridRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
   
    <div className="service-container ">
      <h1 className="service-title fw-bold">Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="service-box"
            ref={el => (gridRefs.current[index] = el)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
   
    </>
    
  );
};

export default ServicePage;
