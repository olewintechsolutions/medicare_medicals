import React from 'react'
import ServicePage from './services';
import MedicalServices from './firstcontainer';
import FourthContainer from './four';
import FifthContainer from './five';
import MedicalContainer from './second';
import AboutImages from './gallery';
import HeroSection1 from './slide';
import OurServices from './ourservices';




function HomePage() {
  return (
    <>
    
    <HeroSection1/>
    <MedicalContainer/>
    <MedicalServices/>
    <ServicePage/>
    <OurServices/>
    <FourthContainer/>
    <AboutImages/>
    <FifthContainer/>
    

 
      
    </>
  )
}

export default HomePage;
