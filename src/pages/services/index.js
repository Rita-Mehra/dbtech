import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container } from '@mui/material';
import { East } from '@mui/icons-material';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import './service.scss'

const Service = () => {

    const service = [
        { image: "images/question.svg", title: "Clients Questionnaires", inform: "Lorem Ipsum is simply dummy text of the printing." },
        { image: "images/completed-task.svg", title: "Questionnaire Review", inform: "Lorem Ipsum is simply dummy text of the printing." },
        { image: "images/folder-icon.svg", title: "Our Strategy Presentation", inform: "Lorem Ipsum is simply dummy text of the printing." }
    ];

    const servicelist = [
        {image: "images/design-icon.svg", title: "Design", service: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {image: "images/development-icon.svg", title: "Development", service: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {image: "images/seo-icon.svg", title: "SEO", service: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {image: "images/social-media.svg", title: "Digital Marketing", service: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
    ];

  return (
    <SkeletonDiv>
     <Header 
      title="Lorem ipsum dolor sit amet." 
      info="Take a look at our friendly team of property managers, book-keepers, administrators and maintenance specialists."
      banner="images/service-banner.svg"
     />

     <section>
       <Container className="tc">
       <div className="tc mt5 mb4">
            <h2 className="font-24-medium text-nevy mb2">Developing Powerful Brands and Identities</h2>
            <div className="text-nevy font-18-light">We work to understand your issues and are driven to ask better questions.</div>
            <p className="font-16-light p-14 text-grey pa3 pl4-ns pr4-ns">Our team is a diverse network of 
            consultants and industry professionals with a global mindset and a collaborative culture. 
            We work to understand your issues and are driven diverse network of consultants.
            </p>
         </div>

         <Grid container spacing={2}>
            {service?.map (item => (
                 <Grid item xs={12} md={4} lg={4}>
                 <div className="flex mb2">
                    <img src={item.image} className="mr3"/>
                  <div>
                   <h3 className="tl mb2 text-black2 font-18-medium">{item.title}</h3>
                   <p className="tl text-grey font-14-light pr4">{item.inform}</p>
                  </div> 
                </div>   
               </Grid>
            ))}
         </Grid>
       </Container>  
     </section>

    <section className="our-services tc">
        <h2 className="font-30-medium text-nevy mb2">Our Services</h2>
        <p className="font-18-light text-grey m-auto max-w-47">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.
        </p>

        <Grid container spacing={2}>
            {servicelist?.map (item => (
                <Grid item xs={12} sm={6} lg={3}>
                   <div className="service-list pa3 tc mt4">
                      <img src={item.image} />
                      <h3 className="font-24-normal text-nevy mt2 mb2">{item.title}</h3>
                      <p className="font-16-light text-grey">{item.service}</p>
                   </div>
                </Grid>
            ))}
          
        </Grid>

    </section>  

    <Container>
            <div className="consulting m-auto">
               <Grid container spacing={2}>
                  <Grid item xs={12} md={5} lg={5}>
                    <img src="images/consult-talk.svg" />
                  </Grid>
                  <Grid item xs={12} md={7} lg={7} className="flex items-center">
                    <div className="tl">
                        <h4 className="font-24-medium text-nevy mb2">Consulting</h4>
                        <p className="font-14-light text-black2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <Link to="/" className="red-link font-14-medium flex items-center"><span>Join Us</span> <East /></Link>
                    </div>
                  </Grid>
               </Grid>
            </div>
        </Container>
    </SkeletonDiv>
  )
}

export default Service;

