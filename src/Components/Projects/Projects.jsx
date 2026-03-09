import React, { useState } from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projectsData = [
    { id: 1, title: "Travel Website", category: "React & Booking System", date: "12-05-2024", image: "trripy.png" },
    { id: 2, title: "Medical Center", category: "React.js & Health UI", date: "10-02-2024", image: "medical.png" },
    { id: 3, title: "Educational Platform", category: "Html-Css3-Vanilla js", date: "05-01-2024", image: "edu.png" },
    { id: 4, title: "Car Repair Site", category: "Service Management", date: "20-03-2024", image: "car.png" },
    { id: 5, title: "Admin Dashboard", category: "React & Data Visualization", date: "15-04-2024", image: "dashboard.png" }, 
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="title-left">
          <p className="blue-label">Portfolio</p>
          <h2>My Creative Works <br /> Latest <span>Projects</span></h2>
        </div>
        
        <a href="https://github.com/Rand-7" target="_blank" rel="noopener noreferrer" className="github-btn">
          View Github <img src="/arrowicon.png" alt="icon" className="btn-icon" />
        </a>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="img-holder">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-footer">
              <div className="card-text">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <img 
                src="arrowicon.png" 
                className="arrow-icon-btn" 
                onClick={() => navigate(`/project/${project.id}`)} 
                alt="View Details"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;