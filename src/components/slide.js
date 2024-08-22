import React, { useEffect, useState } from 'react';
import '../styles/slide.css'; // Custom CSS for typing effect and layout
import { Container} from 'react-bootstrap';

const HeroSection1 = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const typingText = "Medical and Pharmacy Solutions ";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(typingText.slice(0, index));
      setIndex(prevIndex => prevIndex + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, index]);

  return (
    <section className="hero-section">
      <div className="background-image"></div>
      <div className="hero-content">
     
        <Container className="text-center">
        <h1 className=" text-light typing-title" style={{fontSize:'3rem'}}>{text}</h1>
          <p className="hero-description fs-4">
            Delivering quality healthcare with compassion and expertise. Your health is our priority.
          </p>
         
        </Container>
      </div>
    </section>
  );
};

export default HeroSection1;
