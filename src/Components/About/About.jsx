import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'Javascript', level: '95%' },
    { name: 'React', level: '90%' },
  ];

  return (
    <section id="about-me" className="about-section">
      <div className="about-left">
        <img 
          src="about.png"
          alt="Skills Orbit Illustration" 
          className="about-image" 
        />
      </div>

      <div className="about-right">
     <h2>About Me</h2>
<p>
  Hello! I am a Frontend Developer who believes that every pixel has a purpose. 
  I specialize in building interactive web applications using modern technologies 
  like <strong>React.js</strong>. My journey is driven by curiosity and a constant 
  desire to learn, ensuring that every project I touch is both modern and impactful.
</p>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar-container">
                <div className="progress-fill" style={{ width: skill.level }}>
                  <div className="percentage-bubble">{skill.level}</div>
                  <div className="progress-dot"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;