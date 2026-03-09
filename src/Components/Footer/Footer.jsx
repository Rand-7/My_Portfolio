import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="copyright">@ 2026. All Rights Reserved</p>
        <p className="developer">Development by Rand</p>
        
        <div className="social-links">
          <a href="#" className="social-icon">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#" className="social-icon">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/rand-abdaldayem-47a06130b/" className="social-icon">
            <img src="/linkedin.png" alt="Linkedin" />
          </a>
          <a href="#" className="social-icon">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;