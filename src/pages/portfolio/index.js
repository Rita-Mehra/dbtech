import React from 'react';
import { Grid, Container } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import './portfolio.scss';

const Portfolio = () => {

  const portfolio = [
    {
     name: "cuisinecrafters Website",
     image: "images/portfolio1.png",
     info: "Sed in egestas nibh. Morbi mollis posuere enim ac porta. Duis quis sapien nunc. Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed",
     tech: "Angular JS"
    },
    {
     name: "rankandstyle Website",
     info: "Sed in egestas nibh. Morbi mollis posuere enim ac porta. Duis quis sapien nunc. Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed",
     direction: "row-reverse",
     image: "images/portfolio2.png",
     tech: "Angular JS"
    },
    {
      name: "witz.com.tr",
      image: "images/portfolio3.png",
      info: "Sed in egestas nibh. Morbi mollis posuere enim ac porta. Duis quis sapien nunc. Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed",
      tech: "Angular JS"
     },
     {
      name: "gmcclinics Website",
      info: "Sed in egestas nibh. Morbi mollis posuere enim ac porta. Duis quis sapien nunc. Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed",
      direction: "row-reverse",
      image: "images/portfolio4.png",
      tech: "Angular JS"
     }
  ];

  return (
    <SkeletonDiv>
     <Header 
      banner="images/portfolio-banner.svg"
      title="Our Best Portfolio" 
      info="Take a look at our friendly team of property managers, book-keepers, administrators and maintenance specialists."
     /> 

     <section className="portfolio">
       <Container>
        <Grid container spacing={2}>
        {portfolio?.map (item => (
            <Grid container spacing={2} direction={item.direction} className="mb4">
            <Grid item xs={12} sm={12} md={6} lg={6} className="tc">
              <img src={item.image} className="mt3 mb4 work-imgs"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="flex items-center justify-center">
              <div className="protfolio-info mb3">
                <div className="flex justify-between items-center">
                <h4 className="font-30-light text-nevy mb2">{item.name}</h4>
                <div className="new-link"><OpenInNew /></div>
                </div>
                <p className="font-18-light text-black4">{item.info}</p>

                <hr className="hr mt3 mb2" />
                <div className="text-grey2 font-14-light">Technology</div>
                <div className="font-18-light text-black4">{item.tech}</div>
              </div>
            </Grid>
          </Grid>
          ))}
        </Grid>
       </Container>
     </section>

    </SkeletonDiv>
  )
}

export default Portfolio;

