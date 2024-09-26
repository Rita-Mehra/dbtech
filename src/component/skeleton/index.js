import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import './skeleton.scss';

const SkeletonDiv = (props) => {
  return (
      <div>
        <Navbar />
        <div className="child-wrapper">
          {props.children}
        </div>
        <Footer />
      </div>
  );
};

export default SkeletonDiv;
