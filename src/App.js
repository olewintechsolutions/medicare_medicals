import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import NavbarMenu from "./components/Navbar";
import Store from './pages/store';
import AboutPage from './pages/about';
import Branches from './pages/branches';
import Contact from './pages/contact';
import Consultant from './pages/consultant';
import Footer from './components/footer';
import Services from "./components/services";
import CopyPage from './components/copy';
import Policy from './components/privacy';
import Terms from './components/terms';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
<Router>
	<NavbarMenu/>
	    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stores" element={<Store />} />
          <Route path="/consultant" element={<Consultant />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/branches" element={<Branches/>} />

        </Routes>
<Footer/>
<CopyPage/>

</Router>
		
   
	);
}

export default App;



