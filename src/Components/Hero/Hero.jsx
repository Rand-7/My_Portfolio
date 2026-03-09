
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <h4 className="hero-subtitle"></h4>
          <h1>HEY! I’m Rand,</h1>
          <h2>Frontend Developer</h2>
          <p>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
          
          <div className="hero-btns">
            <a href="/Rand RandAbd_Aldayem_CV.pdf" download="Rand_CV.pdf" className="download-btn">
              Download Cv
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-bg-circle"></div> 
          <img src="/rand.jpg" alt="Rand" className="main-profile-img" />
          
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>

      <div className="custom-divider">
        <img src="two.png" alt="divider" className="dotted-line-img" />
      </div>
    </section>
  );
};

export default Hero;