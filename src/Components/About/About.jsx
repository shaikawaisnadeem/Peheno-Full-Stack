import React from 'react';
import './About.css';

const AboutAnd = () => {
  return (
    <div className="aboutand-container">
      <div className="aboutand-image-wrapper">
        <img
          className="aboutand-image"
          src="https://framerusercontent.com/images/D26ujEe31xrr3Df7GB3GXds.png?scale-down-to=1024"
          alt="Women"
        />
      </div>
      <div className="aboutand-links">
        <a>About Us</a>
        <a>Journal</a>
        <a>FAQ</a>
        <a>Contact Us</a>
      </div>
    </div>
  );
};

export default AboutAnd;
