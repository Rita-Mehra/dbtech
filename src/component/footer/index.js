import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import BtnRound from '../button';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer mt6 pb4">
      <Container>
        <div className="partner text-white">
          <h4 className="font-30-light">Want to partner with us? </h4>
          <p className="font-14-light mt1">If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help.</p>
          <button className="pink-btn mt3 pointer">Email Us</button>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <div className="text-white">
              <div className="font-24-normal">Be Future Ready</div>
              <p className="font-14-light mt1 w-60">Get exclusive updates Straight to your inbox</p>
            </div>
            <div className="flex mt2">
              <input type="email" className="footer-inp w-75" placeholder="Enter Email" />
              <div className="send-btn">
                <BtnRound name="Send" />
              </div>
            </div>
          </Grid>  
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <ul className="footer-link">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <ul className="footer-link">
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/privacy-policy">Privacy & Policy</Link></li>
              <li><Link to="/term-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="socil-links">
              <div className="font-14-medium text-white">Connect With Us</div>
              <div className="flex mt1">
                <Link to="#"><img src="images/facebook.svg" /></Link>
                <Link to="#"><img src="images/linkedin.svg" /></Link>
                <Link to="#"><img src="images/twitter.svg" /></Link>
                <Link to="#"><img src="images/insta.svg" /></Link>
            </div>
            <div className="mt2 footer-link">
             <li> <a href="mailto:info@demotech.com">info@demotech.com</a> </li>
            </div>
            </div>
            
          </Grid>
        </Grid> 
      </Container>
    </footer>
  )
}

export default Footer