
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  const projectsData = [
    { id: 1, title: "Travel Website", category: "React & Booking System", date: "12-05-2024", image: "/trripy.png", desc: "A comprehensive travel platform for booking tours and exploring destinations.", repo: "https://github.com/Rand-7/Trripy" },
    { id: 2, title: "Medical Center", category: "React.js & Health UI", date: "10-02-2024", image: "/medical.png", desc: "A modern medical interface for clinic management and patient appointments.", repo: "https://github.com/Rand-7/medical_center" },
    { id: 3, title: "Educational Platform", category: "Html-Css3-Vanilla js", date: "05-01-2024", image: "/edu.png", desc: "An interactive e-learning platform designed for seamless student-teacher interaction.", repo: "https://github.com/Rand-7/EduPress" },
    { id: 4, title: "Car Repair Site", category: "Service Management", date: "20-03-2024", image: "/car.png", desc: "A specialized site for car maintenance services and online scheduling.", repo: "https://github.com/Rand-7/CarHero" },
    { id: 5, title: "Admin Dashboard", category: "React & Data Visualization", date: "15-04-2024", image: "/dashboard.png", desc: "Powerful admin panel for tracking analytics and managing users.", repo: "" },
  ];

  const bestProjects = projectsData.filter(p => p.id === 2 || p.id === 4);
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="not-found">Project not found!</div>;

  const openZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  return (
    <div className="details-page-wrapper">
      <button className="back-home-btn" onClick={() => navigate('/')}>
        <i className="fas fa-arrow-left"></i> Back to Home
      </button>

      <section className="details-content-section">
        <div className="details-left-side">
          <div className="image-hover-container">
            <img src={project.image} alt={project.title} className="main-project-img" />
            <div className="hover-overlay">
              <div className="hover-icons">
                <button className="icon-btn zoom-btn" onClick={openZoom}>
                  <i className="fas fa-expand-alt"></i>
                </button>
                <button className="icon-btn details-link-btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="details-right-side">
          <div className="title-area">
             <h2>{project.title}</h2>
             <img src="/arrowicon.png" className="small-arrow-icon" alt="icon" />
          </div>
          <p className="details-date">{project.date}</p>
          
          <p className="details-description">{project.desc}</p>

          <div className="tech-specs">
            <p><strong>Category :</strong> {project.category}</p>
            <p><strong>Basic Languages :</strong> Html5, Css, Javascript</p>
            <p><strong>Framework :</strong> React.js</p>
          </div>

          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-repo-btn">Github Repo</a>
        </div>
      </section>

      {isZoomed && (
        <div className="lightbox-overlay" onClick={closeZoom}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeZoom}>
              <i className="fas fa-times"></i>
            </button>
            <img src={project.image} alt={project.title} className="full-zoomed-img" />
          </div>
        </div>
      )}

      <div className="related-projects-section">
        <div className="related-header">
           <h4 className="blue-label">Portfolio</h4>
           <h3>The Best <span>Projects</span></h3>
        </div>

        <div className="projects-grid-simple">
          {bestProjects.map((item) => (
            <div className="simple-card" key={item.id} onClick={() => navigate(`/project/${item.id}`)}>
              <div className="simple-img-holder">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="simple-card-footer">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
                <img src="/arrowicon.png" className="card-arrow" alt="view" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;