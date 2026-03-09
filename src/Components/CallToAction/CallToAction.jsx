import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text-content">
          <h2>Try me out, risk free!</h2>
          <p>
            If you're not happy with the design after the first draft, 
            I'll refund your deposit, <strong>no questions asked</strong>
          </p>
        </div>
        
        <a href="#contact" className="cta-button">
          Contact
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;