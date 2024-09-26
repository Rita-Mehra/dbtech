import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Careers from './pages/careers';
import HomePage from './pages/home';
import Portfolio from './pages/portfolio';
import PrivacyPolicy from './pages/privacy-policy';
import Service from './pages/services';
import TermAndConditions from './pages/term-and-conditions';


const Main = (props) => {

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-and-conditions" element={<TermAndConditions />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
