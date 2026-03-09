import React from 'react';
import './Education.css';


const Education = () => {
  const data = [
    { title: "Experience Designer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" },
    { title: "Frontend Developer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" }
  ];

  return (
    <section id="education" className="edu-section">
      <img src="images.png" alt="" className="bg-decor-right" />
      <img src="images.png" alt="" className="bg-decor-left" />

      <span className="edu-subtitle">Education and Experience</span>
      <h2 className="edu-title">Education & Experience</h2>

      <div className="edu-grid">
        <div className="edu-column">
          {data.map((item, index) => (
            <div className="edu-item" key={index}>
              <img src="column.png" alt="timeline" className="timeline-line" />
              <div className="edu-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-column">
          {data.map((item, index) => (
            <div className="edu-item" key={index + 2}>
              <img src="column.png" alt="timeline" className="timeline-line" />
              <div className="edu-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="scroll-top-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </section>
  );
};

export default Education;