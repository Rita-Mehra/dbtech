import React from 'react';
import { Grid, Container } from '@mui/material';
import ServiceItem from './service-item';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import BtnRound from '../../component/button';
import './home.scss';

const HomePage = () => {

  const service = [
    {
      image: "images/service-1.png",
      title: "Aliquam sit amet",
      serInfo: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,'
    },
    {
      image: "images/service-2.png",
      title: "Aliquam sit amet",
      serInfo: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,'
    },
    {
      image: "images/service-3.png",
      title: "Aliquam sit amet",
      serInfo: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,'
    }
  ];

  const customer = [
    { alt: "image 1" },
    { alt: "image 2" },
    { alt: "image 3" },
    { alt: "image 4" }, 
    { alt: "image 5" },
    { alt: "image 6" }
  ]

  return (
    <SkeletonDiv>
     <Header 
     title="Just What Your Business Needs" 
     info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
     banner="images/header-img.svg"
     />   

     <section className="dal-services">
      <Container>
        <Grid container spacing={2} className="mb-50">
          {service?.map (item => (<ServiceItem item={item}/>))}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={5} className="flex items-center">
             <div>
               <h3 className="text-nevy font-24-semibold">Lorem ipsum dolor sit amet.</h3>
               <p className="font-14-light text-grey max-w-23 pt3 pb4">
                It is a long established fact that a reader will be distracted by the readable content 
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                more-or-less normal distribution of letters.
               </p>
               <BtnRound name="Read More" />
             </div>
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
              <img src="images/rocket-illust.png" />
          </Grid>
        </Grid>
      </Container>
     </section>

     <section className="email-us">
       <Container className="tc">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div className="flex items-center font-30-light justify-center h-100 text-light-blue">
                Don’t Just Hire Us. Partner with Us
              </div>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <div className="tl-sm"><BtnRound name="Email Us" /></div>
            </Grid>
          </Grid>
       </Container>
     </section>

     <section className="testimonial">
       <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
                image
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
               <h2 className="font-72-black text-blue-opacity">TESTIMONIAL</h2>
               <div className="font-18-semibold text-nevy mt2 mb2">
                 Here's What Our <br/>Clients Have To Say
               </div>
               <div className="font-16-semibold ttu text-black">JAMIE MORE</div>
               <p className="font-14-light text-grey mt2">It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English.</p>
            </Grid>
          </Grid>
       </Container>
     </section>

     <section className="customers mt4 mb4">
      <Grid container spacing={2}>
        {customer?.map (item => (
           <Grid item xs={12} sm={6} md={2} className="tc"> <img src={item.image} alt={item.alt} /> </Grid>
        ))}
       
      </Grid>  
     </section>
      
    </SkeletonDiv>
  )
}

export default HomePage