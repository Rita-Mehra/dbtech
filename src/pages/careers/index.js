import React from 'react';
import { Grid, Container } from '@mui/material';
import BtnRound from '../../component/button';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import './careers.scss';

const Careers = () => {

    const career = [
      {
        jobtitle: "Product Design",
        info: "Full-time, temporary or Contract."
      },
      {
        jobtitle: "Angular Development",
        info: "Full-time, temporary or Contract."
      },
      {
        jobtitle: "Angular Development",
        info: "Full-time, temporary or Contract."
      },
      {
        jobtitle: "Product design",
        info: "Full-time, temporary or Contract."
      }
    ];

  return (
    <SkeletonDiv>
     <Header 
      title="Join Dalbergia & Make a Difference" 
      info="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
     />

     <section className="career-list">
        <h2 className="font-30-light text-nevy tc mb4">Opening Position</h2>
       <Container>
        {career?.map (item => (
        <div className="career-item mb3">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
                <h3 className="text-black4 font-20-normal">{item.jobtitle}</h3>
                <div className="text-grey font-16-light">{item.info}</div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className="tr">
            <BtnRound name="Apply Now" />
            </Grid>
          </Grid>
        </div> 
        ))} 
       </Container>
     </section>
    </SkeletonDiv>
  )
}

export default Careers