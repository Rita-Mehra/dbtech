import React from 'react';
import SkeletonDiv from '../../component/skeleton';
import Header from '../../component/header';
import { Container } from '@mui/system';
import './policy.scss';

const PrivacyPolicy = () => {

    const list = [
        {listitem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "},
        {listitem: "Donec sit amet lectus id velit sodales tristique."},
        {listitem: "Aliquam laoreet ligula at sollicitudin sodales. "},
        {listitem: "Sed ullamcorper arcu sed ligula condimentum sodales."},
    ];

  return (
    <SkeletonDiv>
     <Header 
      title="Privacy & Policy" 
      info="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
     /> 

     <section className="policy-details">
        <Container>
            <h2 className="font-24-light text-nevy">Privacy & Policy</h2>
            <p className="text-grey font-14-light pt2 pb4">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            </p>

            <div className="text-grey font-16-normal">Here is the terms of our Standard License:</div>
            <ul className="list">
             {list?.map (item => (
                <li className="text-grey font-14-light">{item.listitem}</li>
             ))}
             </ul>

             <div className="text-grey font-16-normal mt4">Here is the terms of our Standard License:</div>
            <ul className="list">
             {list?.map (item => (
                <li className="text-grey font-14-light">{item.listitem}</li>
             ))}
             </ul>

             <p className="text-grey font-14-light pt4 pb3">
             There are many variations of passages of Lorem Ipsum available, but the majority have 
             suffered alteration in some form, by injected humour, or randomised words which don't 
             look even slightly believable. If you are going to use a passage of Lorem Ipsum, you 
             need to be sure there isn't anything embarrassing hidden in the middle of text. All 
             the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
             making this the first true generator on the Internet. It uses a dictionary of over 200 
             Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
             looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected 
             humour, or non-characteristic words etc.
             </p>

             <p className="text-grey font-14-light pt2">
             There are many variations of passages of Lorem Ipsum available, but the majority have 
             suffered alteration in some form, by injected humour, or randomised words which don't 
             look even slightly believable. If you are going to use a passage of Lorem Ipsum, you 
             need to be sure there isn't anything embarrassing hidden in the middle of text. All 
             the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
             making this the first true generator on the Internet. It uses a dictionary of over 200 
             Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
             looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected 
             humour, or non-characteristic words etc.
             </p>
             

        </Container>
     </section>

    </SkeletonDiv>
  )
}

export default PrivacyPolicy;

