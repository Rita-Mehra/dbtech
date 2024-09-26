import React from 'react';
import { Grid, Container } from '@mui/material';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import './about.scss';

const AboutUs = () => {

const strategies = [
   {
    count: "01",
    name: "Strategy",
    image: "images/strategy-1.svg",
    info: "Our strategy capabilities span business consulting, brand planning, data science and research. We help leading organizations succeed in the digital economy, reposition their brand (or create a new brand), and define broader marketing strategies."
   },
   {
    count: "02",
    name: "Creative",
    info: "Our strategy capabilities span business consulting, brand planning, data science and research. We help leading organizations succeed in the digital economy, reposition their brand (or create a new brand), and define broader marketing strategies.",
    direction: "row-reverse",
    image: "images/creative.svg"
   },
   {
    count: "03",
    name: "Technology",
    image: "images/technology.svg",
    info: "Engineers, strategists, and quality assurance professionals turn ideas and designs into functional, reliable, products and services. Our cross-disciplinary teams are highly collaborative, pushing the boundaries of what brands can enable for their users."
   },
   {
    count: "04",
    name: "Data",
    info: "By creating data systems that help businesses understand and predict patterns of consumer behavior, we enable organizations to reach users more effectively with optimized experiences and targeted content across the digital ecosystem.",
    direction: "row-reverse",
    image: "images/statistics.svg"
   },
];

const experience = [
    {
      image: "images/project.svg",
      title: "100k",
      info:"Happy Clients"
    },
    {
      image: "images/project.svg",
      title: "100+",
      info:"Project Done"
    },
    {
      image: "images/expert.svg",
      title: "10+",
      info:"Experts People"
    },
    {
      image: "images/portfolio.svg",
      title: "50+",
      info:"Portfolios"
    }
];

  return (
    <SkeletonDiv>
     <Header 
      title="Lorem ipsum dolor sit amet." 
      info="Take a look at our friendly team of property managers, book-keepers, administrators and maintenance specialists. They’re on hand to help…"
      banner="images/about-banner.svg"
     />

     <section className="about-mid-content">
       <Container>
         <div className="tc mt5 mb5">
            <h2 className="font-30-medium text-nevy">Who We Are</h2>
            <p className="font-16-light text-grey pa3 pl4-ns pr4-ns">Dummy text is also used to demonstrate the appearance of different typefaces and layouts, 
              and in general the content of dummy text is nonsensical. Due to its widespread use as filler 
              text for layouts, non-readability is of great importance: human perception is tuned to 
              recognize certain patterns and repetitions in texts. If the distribution of letters and 
              'words' is random, the reader will not be distracted from making a neutral judgement on 
              the visual impact and readability of the typefaces (typography), or the distribution of 
              text on the page (layout or type area). For this reason, dummy text usually consists of a 
              more or less random series of words or syllables. This prevents repetitive patterns from 
              impairing the overall visual impression and facilitates the comparison of different typefaces. 
              Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout 
              impression of the final publication is not compromised.
            </p>
         </div>
    
         <div className="dal-pillars relative">
           <h3 className="mt2 font-18-medium text-red tc mb4">Dalbergia was established on four pillars:</h3>
           <img src="images/line.svg" className="lines"/>
          {strategies?.map (item => (
            <Grid container spacing={2} direction={item.direction}>
            <Grid item xs={12} sm={6} lg={6} className="tc">
              <img src={item.image} className="mt3 mb4"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} className="flex items-center">
              <div>
              <div className="text-red font-49-light">{item.count}</div>
                <h4 className="font-24-semibold text-nevy mb2">{item.name}</h4>
                <p className="font-14-light text-grey">{item.info}</p>
              </div>
            </Grid>
          </Grid>
          ))}
         </div>

         <div className="client-experience">
          <Grid container spacing={2}>
            {experience?.map (item => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <div className="work-exp tc">
                   <img src={item.image} />
                   <h5 className="text-grey font-24-semibold mt1">{item.title}</h5>
                   <p className="text-grey font-18-light">{item.info}</p>
                </div>
              </Grid>
            ))}
          </Grid>
         </div>
       </Container>
     </section>
    </SkeletonDiv> 
  )
}

export default AboutUs