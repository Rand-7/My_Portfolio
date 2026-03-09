import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <span className="section-subtitle">Contact</span>
        <h2 className="section-title">Let’s Discuss Your <span>Project</span></h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box">
                <img src="/phone.png" alt="phone" /> 
              </div>
              <div className="info-text">
                <span>Call me</span>
                <p>+963947466105</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <img src="/email.png" alt="email" />
              </div>
              <div className="info-text">
                <span>Email me</span>
                <p>randabdaldayem29@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <img src="/location.png" alt="address" />
              </div>
              <div className="info-text">
                <span>Address</span>
                <p>Homs, Syria</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Your email" required />
            </div>
            <input type="text" placeholder="Phone number" />
            <textarea placeholder="Message" rows="6"></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;