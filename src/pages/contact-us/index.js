import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Input, TextField } from '@mui/material';
import { Email, Call } from '@mui/icons-material';
import BtnRound from '../../component/button';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import './contact.scss';

const ContactUs = () => {

    const ariaLabel = { 'aria-label': 'description' };

    const contact = [
        {label: "First Name", placeholder: "John" },
        {label: "Last Name", placeholder: "Kon" },
        {label: "Email", placeholder: "abc@gmail.com" },
        {label: "Phone Number", placeholder: "234-456-7895" }
    ];

  return (
    <SkeletonDiv>
         <Header 
            title="Contact Us" 
            info="Fill up the form and our Team will get back to you within 24 hours."
            banner="images/about-banner.svg"
            />

            <section className="contact-us">
            <Container>
              <div className="font-18-light text-black2 mb4">
                Please indicate the nature of your inquiry and fill in the form below.
              </div>
              <Grid container spacing={2}>
               <Grid item xs={12} sm={12} lg={8}>
                <Grid container spacing={2}>
                    {contact?.map (item => (
                    <Grid item xs={12} sm={6} lg={6}>
                        <span className="font-16-normal text-nevy mb2">{item.label}</span>
                        <Input placeholder={item.placeholder} className="w-100 input" inputProps={ariaLabel} />
                    </Grid>
                 ))}
                </Grid>
                <Grid xs={12} sm={12} lg={12}>
                <span className="font-16-normal text-nevy mb2">Message</span>    
                <TextField
                    className="w-100"
                    multiline
                    rows={4}
                    placeholder="Type your Question here..."
                    variant="standard"
                  />
                </Grid>
               </Grid>
               <Grid item xs={12} sm={12} lg={4}>
                 <div className="contact-info pa3">
                    <h2 className="text-white font-30-semibold mb4">Reach Us</h2>
                    <ul className="contact-list">
                      <li className="flex items-center">
                      <Email />  
                       <a href="mailto:info@dalbergiatech.com">info@dalbergiatech.com</a>
                      </li>
                      <li className="flex items-center">
                      <Call />  
                       <a href="tel:+91-234-456-7891">+91-234-456-7891</a>
                      </li>
                    </ul>

                    <div className="flex mt1 contact-social-links mt5">
                      <Link to="#"><img src="images/fb.svg" /></Link>
                      <Link to="#"><img src="images/002-twitter.svg" /></Link>
                      <Link to="#"><img src="images/001-linkedin.svg" /></Link>
                      <Link to="#"><img src="images/003-instagram.svg" /></Link>
                     </div>
                 </div>
               </Grid>
              </Grid>
              <div className="mt4">
                <BtnRound name="Submit" />
              </div>
            </Container>
            </section>

    </SkeletonDiv>
  )
}

export default ContactUs;